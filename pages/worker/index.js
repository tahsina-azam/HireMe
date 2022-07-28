import React from "react";
import WorkerProfile from "../../src/components/workerProfile";
import NavBar from "../../src/components/App-Bar/workerAppbar";
import axios from "axios";

export default function () {
  return (
    <div>
      <NavBar />
      <WorkerProfile />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  const cookie = ctx.req.headers.cookie;
  const res = await axios.get("http://localhost:3000/api/worker/profiles", {
    headers: {
      cookie: cookie,
    },
  });
  console.log(cookie);
  return {
    props: { yo: "yo" },
  };
}
