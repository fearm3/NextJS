import { useRouter } from "next/router";
//*'withRouter' in classComp.*//

function PortfolioProjectPage() {
  const router = useRouter();

  console.log(router.pathname); // portfolio/[projectid]
  console.log(router.query); // projectid: "something"
  // send a request to some backend server
  // to fetch the piece of data with an id of router.query.projectid
  return (
    <div>
      <h1>The Portfolio Project Page</h1>
    </div>
  );
}

export default PortfolioProjectPage;
//Dynamic routes
