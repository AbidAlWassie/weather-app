import Navbar from "@/components/ui/Navbar";

const NavbarWrapper = ({ session }: { session: any }) => {
  const brandName = "oneManDev";
  const profileImage = session?.user?.image || "https://img.icons8.com/?size=96&id=kDoeg22e5jUY&format=png";
  const onLogoutClick = session?.user ? "/api/auth/signout" : "/api/auth/signin";
  const onProfileClick = session?.user ? "/profile/" : "/api/auth/signin";
  const onSettingsClick = "";
  const toggleProfile = session?.user ? "" : "hidden";

  return (
    <Navbar
      brandName={brandName}
      profileImage={profileImage}
      onLogoutClick={onLogoutClick}
      onProfileClick={onProfileClick}
      onSettingsClick={onSettingsClick}
      toggleProfile={toggleProfile}
    />
  );
};

export default NavbarWrapper;
