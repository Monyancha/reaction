import Reaction from "/imports/plugins/core/core/server/Reaction";
import resolvers from "./server/no-meteor/resolvers";
import schemas from "./server/no-meteor/schemas";

Reaction.registerPackage({
  label: "Payments",
  name: "reaction-payments",
  icon: "fa fa-credit-card",
  autoEnable: true,
  graphQL: {
    resolvers,
    schemas
  },
  settings: {
    payments: {
      enabled: true
    }
  },
  registry: [
    {
      provides: ["dashboard"],
      name: "payments",
      label: "Payments",
      description: "Payment Methods",
      icon: "fa fa-credit-card",
      priority: 1,
      container: "core",
      workflow: "coreDashboardWorkflow"
    },
    {
      label: "Payment Settings",
      icon: "fa fa-credit-card",
      name: "payment/settings",
      provides: ["settings"],
      route: "/dashboard/payment/settings",
      template: "paymentSettings",
      workflow: "coreAdminWorkflow"
    }
  ]
});
