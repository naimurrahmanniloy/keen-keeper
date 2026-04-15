import { useLoaderData, useParams } from "react-router";

const FriendsPage = () => {
  const { id } = useParams();

  const friendsData = useLoaderData();

  const expectedData = friendsData.find((friendData) => friendData.id == id);
  console.log(expectedData);

  return (
    <div>
      <h1>Friends</h1>
    </div>
  );
};

export default FriendsPage;
