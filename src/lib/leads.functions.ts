import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().trim().min(2, "Ismni kiriting").max(100),
  phone: z.string().trim().min(7, "Telefon raqamni kiriting").max(30),
  business: z.string().trim().max(120).optional().default(""),
  budget: z.string().trim().max(60).optional().default(""),
});

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("leads").insert({
      name: data.name,
      phone: data.phone,
      business: data.business || null,
      budget: data.budget || null,
    });
    if (error) return { ok: false as const };
    return { ok: true as const };
  });

export const listLeads = createServerFn({ method: "GET" }).handler(async () => {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data, error } = await supabaseAdmin
    .from("leads")
    .select("id,name,phone,business,budget,status,created_at")
    .order("created_at", { ascending: false })
    .limit(500);
  if (error) return { leads: [] };
  return { leads: data ?? [] };
});

export const setLeadStatus = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) =>
    z.object({ id: z.string().uuid(), status: z.enum(["new", "done"]) }).parse(data),
  )
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    await supabaseAdmin.from("leads").update({ status: data.status }).eq("id", data.id);
    return { ok: true as const };
  });
