import SideNav from "../UI/sidenav";
import { getInvites, getUserByID } from "../lib/action";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUserByID({ id: true, isVerified: true });
  const verified = !!user?.isVerified;
  const invites = await getInvites();
  return (
    <div className="flex h-screen w-full flex-col md:flex-row">
      <SideNav
        verified={verified}
        invites={invites?.length || 0}
        myID={user?.id || ""}
      />
      <main className="flex max-h-screen grow flex-col items-center overflow-y-auto px-4 md:py-12">
        {children}
      </main>
    </div>
  );
}
