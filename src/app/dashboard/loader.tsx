import MakeupLoader from "@/shared/components/loader/loader";

export default function DashboardLoading() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center">
      <MakeupLoader text="Setting up your dashboard..." />
    </div>
  );
}
