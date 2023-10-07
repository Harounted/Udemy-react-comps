import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "1",
      label: "Label 1",
      content:
        "Consectetur in irure minim ut anim. Tempor enim nostrud exercitation proident exercitation ipsum quis ex fugiat. Fugiat aliquip cillum aute id dolor ea ea est eu pariatur aute tempor. Do dolor aliquip elit qui eu minim officia. Exercitation occaecat pariatur dolore ipsum dolor irure qui laboris veniam reprehenderit nulla. Sit sint non nostrud cupidatat mollit occaecat enim enim cupidatat anim excepteur nisi. Velit amet tempor anim nisi aliqua ullamco tempor elit esse.",
    },
    {
      id: "2",
      label: "Label 2",
      content:
        "Do consectetur velit nostrud cillum qui ad laborum ipsum. Minim et Lorem culpa qui deserunt velit sit exercitation nisi. Laboris adipisicing consequat Lorem duis Lorem ut amet fugiat commodo. Proident reprehenderit voluptate culpa in sit consectetur pariatur id aliqua Lorem culpa officia incididunt. Eiusmod nulla amet magna amet. Lorem voluptate irure est nostrud officia sunt.",
    },
    {
      id: "3",
      label: "Label 3",
      content:
        "In fugiat sit non commodo deserunt pariatur incididunt reprehenderit incididunt et. Ullamco labore ullamco ex elit occaecat aliqua occaecat. Nulla enim ipsum ut consequat consectetur ea. Minim aute proident excepteur est labore reprehenderit labore ullamco nisi. Ullamco adipisicing dolore culpa tempor quis ipsum officia reprehenderit ad non. Ipsum id est cillum in commodo anim labore anim.",
    },
  ];
  return <Accordion items={items}></Accordion>;
}

export default AccordionPage;
