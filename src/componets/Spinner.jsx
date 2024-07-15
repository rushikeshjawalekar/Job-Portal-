import CLipLoader from "react-spinners/ClipLoader";

export default function Spinner({ loading }) {
  const override = {
    display: "block",
    margin: "100px auto",
  };
  return (
    <CLipLoader
      color="#4338ca"
      loading={loading}
      cssOverride={override}
      size={150}
    />
  );
}
