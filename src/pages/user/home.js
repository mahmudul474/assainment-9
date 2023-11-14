import Layout from "@/components/layout/layout";
import UserDashboardLayout from "@/components/layout/userLayout/userLayot";
import React from "react";

export default function Home() {
  return (
    <Layout>
      <UserDashboardLayout>
        <div>home</div>
      </UserDashboardLayout>
    </Layout>
  );
}
