function options() {
  return {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "cloud-drive Express API with Swagger",
        version: "1.0.0",
        description:
          "This is cloud drive api made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "AntonZakhlebayeu",
          email: "antonzakhlebayeu@gmail.com",
        },
      },
      servers: [
        {
          url: "http://localhost:8000/api",
        },
      ],
      components: {
        securitySchemes: {
          jwt: {
            type: "http",
            scheme: "bearer",
            in: "header",
            bearerFormat: "Bearer",
          },
        },
      },
      security: [
        {
          jwt: [],
        },
      ],
    },
    apis: ["./router/*.js", "./models/*.js"],
  };
}

module.exports = options();
