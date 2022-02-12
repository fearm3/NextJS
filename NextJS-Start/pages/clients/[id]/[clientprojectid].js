import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>The project Page for a Special Project for a Select Client</h1>
    </div>
  );
}

export default SelectedClientProjectPage;
