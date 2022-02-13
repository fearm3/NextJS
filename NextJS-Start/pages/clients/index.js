import Link from "next/link";

function ClientsPage() {
  const clients = [
    {
      id: "apple",
      name: "Apple",
    },
    {
      id: "straw",
      name: "Strawberry",
    },
  ];
  return (
    <div>
      <h1>The Client Page</h1>
      <ul>
        {clients.map((client) => {
          const { id, name } = client;
          return (
            <li key={id}>
              {/* <Link href={`/clients/${id}`}>{name}</Link> */}
              <Link
                href={{
                  pathname: "/clients/[id]",
                  query: { id },
                }}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default ClientsPage;
