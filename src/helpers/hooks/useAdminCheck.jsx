import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Api from "src/helpers/Api";

function useAdminCheck() {
  const router = useRouter();

  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    const adminPanel = router.pathname.includes("/admin");
    // check  token is valid
    if (adminPanel) {
      Api.post("/api/auth/token")
        .then((res) => {
          if (!res) {
            router.push({
              pathname: "/auth/signin",
              query: { returnUrl: router.asPath },
            });
            setAdmin(false);
          } else {
            setAdmin(true);
          }
        })
        .catch((err) => {
          console.log(err);
          setAdmin(false);
        });
    }
  }, []);

  return isAdmin;
}

export { useAdminCheck };
