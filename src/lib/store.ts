import { promises as fs } from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");

async function ensureDir(dir: string) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch (_) {
    // ignore
  }
}

async function readJSON<T = unknown>(file: string, fallback: T): Promise<T> {
  try {
    const buf = await fs.readFile(file, "utf8");
    return JSON.parse(buf) as T;
  } catch (e: any) {
    if (e?.code === "ENOENT") return fallback;
    throw e;
  }
}

async function writeJSON(file: string, data: any) {
  const tmp = `${file}.tmp`;
  await fs.writeFile(tmp, JSON.stringify(data, null, 2), "utf8");
  await fs.rename(tmp, file);
}

export type BugReport = {
  id: string;
  createdAt: string;
  name?: string;
  email?: string;
  platform?: string;
  version?: string;
  steps?: string;
  expected?: string;
  actual?: string;
  userAgent?: string;
};

export type SupportTicket = {
  id: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  subject: string;
  category?: string;
  message: string;
  status: "open" | "pending" | "closed";
  userAgent?: string;
};

const BUGS_FILE = path.join(DATA_DIR, "bug-reports.json");
const TICKETS_FILE = path.join(DATA_DIR, "support-tickets.json");

export async function addBugReport(input: Omit<BugReport, "id" | "createdAt">): Promise<BugReport> {
  await ensureDir(DATA_DIR);
  const list = await readJSON<BugReport[]>(BUGS_FILE, []);
  const now = new Date().toISOString();
  const id = `bug_${Math.random().toString(36).slice(2, 10)}_${Date.now()}`;
  const rec: BugReport = { id, createdAt: now, ...input };
  list.unshift(rec);
  await writeJSON(BUGS_FILE, list);
  return rec;
}

export async function listBugReports(): Promise<BugReport[]> {
  return readJSON<BugReport[]>(BUGS_FILE, []);
}

export async function addSupportTicket(input: Omit<SupportTicket, "id" | "createdAt" | "updatedAt" | "status">): Promise<SupportTicket> {
  await ensureDir(DATA_DIR);
  const list = await readJSON<SupportTicket[]>(TICKETS_FILE, []);
  const now = new Date().toISOString();
  const id = `tkt_${Math.random().toString(36).slice(2, 10)}_${Date.now()}`;
  const rec: SupportTicket = { id, createdAt: now, updatedAt: now, status: "open", ...input };
  list.unshift(rec);
  await writeJSON(TICKETS_FILE, list);
  return rec;
}

export async function updateSupportTicket(id: string, patch: Partial<Pick<SupportTicket, "status" | "message" | "subject" | "category">>): Promise<SupportTicket | null> {
  await ensureDir(DATA_DIR);
  const list = await readJSON<SupportTicket[]>(TICKETS_FILE, []);
  const idx = list.findIndex((x) => x.id === id);
  if (idx === -1) return null;
  const updated: SupportTicket = { ...list[idx], ...patch, updatedAt: new Date().toISOString() };
  list[idx] = updated;
  await writeJSON(TICKETS_FILE, list);
  return updated;
}

export async function listSupportTickets(filter?: { email?: string }): Promise<SupportTicket[]> {
  const list = await readJSON<SupportTicket[]>(TICKETS_FILE, []);
  if (filter?.email) return list.filter((x) => x.email.toLowerCase() === filter.email!.toLowerCase());
  return list;
}
