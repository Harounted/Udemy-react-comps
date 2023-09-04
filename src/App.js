import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          Buy Now !
        </Button>
      </div>
      <div>
        <Button danger outline>
          Add to cart
        </Button>
      </div>
      <div>
        <Button warning>Delete</Button>
      </div>
      <div>
        <Button secondary outline>
          See Deals !
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something else !
        </Button>
      </div>
    </div>
  );
}

export default App;
