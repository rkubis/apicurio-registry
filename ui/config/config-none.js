var ApicurioRegistryConfig = {
    artifacts: {
        url: "http://localhost:8080/apis/registry"
    },
    ui: {
        contextPath: "/",
        navPrefixPath: "/",
        codegenEnabled: false
    },
    auth: {
        type: "none"
    },
    features: {
        readOnly: false,
        breadcrumbs: true,
        roleManagement: false,
        settings: true
    }
};
