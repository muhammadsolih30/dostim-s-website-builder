import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { listLeads, setLeadStatus } from "@/lib/leads.functions";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Arizalar" },
      { name: "description", content: "Saytdan kelgan arizalar ro‘yxati." },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Admin — Arizalar" },
      { property: "og:description", content: "Saytdan kelgan arizalar ro‘yxati." },
    ],
  }),
  component: AdminPage,
});

function AdminPage() {
  const fetchLeads = useServerFn(listLeads);
  const updateStatus = useServerFn(setLeadStatus);
  const qc = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["leads"],
    queryFn: () => fetchLeads(),
  });

  const mutation = useMutation({
    mutationFn: (vars: { id: string; status: "new" | "done" }) =>
      updateStatus({ data: vars }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["leads"] }),
  });

  const leads = data?.leads ?? [];
  const newCount = leads.filter((l) => l.status === "new").length;

  return (
    <main className="min-h-screen px-5 py-14">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold sm:text-4xl">Arizalar</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Jami: {leads.length} · Yangi: {newCount}
        </p>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-border bg-card/60">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="border-b border-border text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-semibold">Sana</th>
                <th className="px-4 py-3 font-semibold">Ism</th>
                <th className="px-4 py-3 font-semibold">Telefon</th>
                <th className="px-4 py-3 font-semibold">Biznes</th>
                <th className="px-4 py-3 font-semibold">Byudjet</th>
                <th className="px-4 py-3 font-semibold">Holat</th>
              </tr>
            </thead>
            <tbody>
              {isLoading && (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">
                    Yuklanmoqda...
                  </td>
                </tr>
              )}
              {!isLoading && leads.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">
                    Hozircha ariza yo‘q.
                  </td>
                </tr>
              )}
              {leads.map((l) => (
                <tr key={l.id} className="border-b border-border/50 last:border-0">
                  <td className="px-4 py-3 whitespace-nowrap text-muted-foreground">
                    {new Date(l.created_at).toLocaleString("uz-UZ")}
                  </td>
                  <td className="px-4 py-3 font-medium">{l.name}</td>
                  <td className="px-4 py-3">
                    <a className="hover:text-primary" href={`tel:${l.phone}`}>
                      {l.phone}
                    </a>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{l.business || "—"}</td>
                  <td className="px-4 py-3 text-muted-foreground">{l.budget || "—"}</td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() =>
                        mutation.mutate({
                          id: l.id,
                          status: l.status === "done" ? "new" : "done",
                        })
                      }
                      className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
                        l.status === "done"
                          ? "bg-secondary text-secondary-foreground"
                          : "bg-[image:var(--gradient-gold)] text-primary-foreground"
                      }`}
                    >
                      {l.status === "done" ? "Bajarilgan" : "Yangi"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
