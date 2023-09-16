import Button from "./Button";
import { GoBell, GoDownload, GoDatabase } from "react-icons/go";

const handleClick = () => {
  console.log("click!");
};

function App() {
  return (
    <div>
      <div>
        <Button primary outline rounded>
          <GoBell />
          Buy
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoDownload />
          Add to cart
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          Delete
        </Button>
      </div>
      <div>
        <Button secondary outline>
          See Deals !
        </Button>
      </div>
      <div>
        <Button success rounded>
          Something else !
        </Button>
      </div>
    </div>
  );
}

export default App;
