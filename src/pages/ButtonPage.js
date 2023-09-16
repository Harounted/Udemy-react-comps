import Button from "../components/Button";
import { GoBell, GoDownload, GoDatabase } from "react-icons/go";

const handleClick = () => {
  console.log("click!");
};

function ButtonPage() {
  return (
    <div>
      <div>
        <Button onClick={handleClick} primary outline rounded>
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

export default ButtonPage;
