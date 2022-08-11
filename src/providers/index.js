import TechProvider from "./Tech";
import UserProvider from "./User";

export default function Providers({ children }) {
  return (
    <UserProvider>
      <TechProvider>{children}</TechProvider>
    </UserProvider>
  );
}
