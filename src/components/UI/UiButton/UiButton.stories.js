import UiButton from "./UiButton";

export default {
  title: "Ui-Kit/UiButton",
  component: UiButton,
};

const Template = (args) => <UiButton {...args} />;

const props = {
  text: "Help",
  onClick: () => {
    console.log("work");
  },
  disabled: false,
  theme: "dark",
  classes: " ",
};

export const Light = Template.bind({});

Light.args = {
  ...props,
  theme: "light",
};

export const Dark = Template.bind({});

Dark.args = {
  ...props,
  theme: "dark",
};

export const Disabled = Template.bind({});

Disabled.args = {
  ...props,
  disabled: true,
};
