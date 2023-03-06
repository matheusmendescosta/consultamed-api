export const swaggerDocument = 
{
  "openapi": "3.0.3",
  "info": {
    "title": "consultamed - API 1.0.0",
    "description": "Consultamed é uma simples api para cadastro de medicos, pacientes, consulta e historicos de consultas, abaixo você encontrar os endpoint para realizar edição, criação, listagem e deletar.\n\n_Api em desenvolvimento em projeto open source caso queira contribuir enviar um PR clicando [aqui](https://github.com/matheusmendescosta/consultamed-api)._\n\nAlguns links úteis:\n- [Repositorio consultamed](https://github.com/matheusmendescosta/consultamed-api)",
    "contact": {
      "email": "matheusmendesdacosta@outlook.com"
    },
    "license": {
      "name": "MIT",
      "url": "https://opensource.org/license/mit/"
    },
    "version": "1.0.0"
  },
  "servers": [
    {
      "url": "https://localhost:3000"
    }
  ],
  "tags": [
    {
      "name": "Paciente",
      "description": "Tudo sobre a rota paciente",
      "externalDocs": {
        "description": "Saiba mais",
        "url": "http://swagger.io"
      }
    },
    {
      "name": "Medico",
      "description": "Tudo sobre a rota medico",
      "externalDocs": {
        "description": "Saiba mais",
        "url": "http://swagger.io"
      }
    },
    {
      "name": "Consulta",
      "description": "Tudo sobre a rota medico",
      "externalDocs": {
        "description": "Saiba mais",
        "url": "http://swagger.io"
      }
    }
  ],
  "paths": {
    "/paciente": {
      "put": {
        "tags": [
          "Paciente"
        ],
        "summary": "Atualiza um paciente",
        "description": "Atualize um paciente por id",
        "operationId": "updatePaciente",
        "requestBody": {
          "description": "Atualiza um paciente já cadastrado",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Paciente"
              }
            },
            "application/xml": {
              "schema": {
                "$ref": "#/components/schemas/Paciente"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/Paciente"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Paciente"
                }
              },
              "application/xml": {
                "schema": {
                  "$ref": "#/components/schemas/Paciente"
                }
              }
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "paciente not found"
          },
          "405": {
            "description": "Validation exception"
          }
        }
      },
      "post": {
        "tags": [
          "Paciente"
        ],
        "summary": "Adicionar um novo paciente",
        "description": "Adiciona um novo paciente",
        "operationId": "createPaciente",
        "requestBody": {
          "description": "Cria um novo paciente",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Paciente"
              }
            },
            "application/xml": {
              "schema": {
                "$ref": "#/components/schemas/Paciente"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/Paciente"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Paciente"
                }
              },
              "application/xml": {
                "schema": {
                  "$ref": "#/components/schemas/Paciente"
                }
              }
            }
          },
          "405": {
            "description": "Invalid input"
          }
        },
        "security": [
          {
            "petstore_auth": [
              "write:pets",
              "read:pets"
            ]
          }
        ]
      }
    },
    "/pacientes/": {
      "get": {
        "tags": [
          "Paciente"
        ],
        "summary": "Lista todos pacientes",
        "description": "Retorna a lista de todos o pacientes",
        "operationId": "getPacientes",
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Paciente"
                }
              },
              "application/xml": {
                "schema": {
                  "$ref": "#/components/schemas/Paciente"
                }
              }
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "Paciente not found"
          }
        }
      }
    },
    "/paciente/{id}": {
      "get": {
        "tags": [
          "Paciente"
        ],
        "summary": "Lista paciente por ID",
        "description": "Retorna apenas um paciente",
        "operationId": "getPacienteById",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "ID of paciente to return",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Paciente"
                }
              },
              "application/xml": {
                "schema": {
                  "$ref": "#/components/schemas/Paciente"
                }
              }
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "Paciente not found"
          }
        }
      },
      "delete": {
        "tags": [
          "Paciente"
        ],
        "summary": "Deleta um paciente",
        "description": "Exclui um paciente",
        "operationId": "deletePaciente",
        "parameters": [
          {
            "name": "api_key",
            "in": "header",
            "description": "",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "Paciente id to delete",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "400": {
            "description": "Invalid pet value"
          }
        }
      }
    },
    "/medico": {
      "put": {
        "tags": [
          "Medico"
        ],
        "summary": "Atualiza um medico",
        "description": "Atualize um medico por id",
        "operationId": "updateMedico",
        "requestBody": {
          "description": "Atualiza um medico já cadastrado",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Medico"
              }
            },
            "application/xml": {
              "schema": {
                "$ref": "#/components/schemas/Medico"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/Medico"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Medico"
                }
              },
              "application/xml": {
                "schema": {
                  "$ref": "#/components/schemas/Medico"
                }
              }
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "medico not found"
          },
          "405": {
            "description": "Validation exception"
          }
        }
      },
      "post": {
        "tags": [
          "Medico"
        ],
        "summary": "Adicionar um novo medico",
        "description": "Adiciona um novo medico",
        "operationId": "createMedico",
        "requestBody": {
          "description": "Cria um novo medico",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Medico"
              }
            },
            "application/xml": {
              "schema": {
                "$ref": "#/components/schemas/Medico"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/Medico"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Medico"
                }
              },
              "application/xml": {
                "schema": {
                  "$ref": "#/components/schemas/Medico"
                }
              }
            }
          }
        }
      }
    },
    "/medico/": {
      "get": {
        "tags": [
          "Medico"
        ],
        "summary": "Lista todos medicos",
        "description": "Retorna a lista de todos o medicos",
        "operationId": "getMedico",
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Medico"
                }
              },
              "application/xml": {
                "schema": {
                  "$ref": "#/components/schemas/Medico"
                }
              }
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "Medico not found"
          }
        }
      }
    },
    "/medico/{id}": {
      "get": {
        "tags": [
          "Medico"
        ],
        "summary": "Lista medico por ID",
        "description": "Retorna apenas um medico",
        "operationId": "getMedicoById",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "ID of pet to return",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Medico"
                }
              },
              "application/xml": {
                "schema": {
                  "$ref": "#/components/schemas/Medico"
                }
              }
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "medico not found"
          }
        }
      },
      "delete": {
        "tags": [
          "Medico"
        ],
        "summary": "Deleta um medico",
        "description": "Exclui um medico",
        "operationId": "deleteMedico",
        "parameters": [
          {
            "name": "api_key",
            "in": "header",
            "description": "",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "medico id to delete",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "400": {
            "description": "Invalid medico value"
          }
        }
      }
    },
    "/consulta": {
      "put": {
        "tags": [
          "Consulta"
        ],
        "summary": "Atualiza uma consulta",
        "description": "Atualize uma consulta por id",
        "operationId": "updateConsulta",
        "requestBody": {
          "description": "Atualiza uma consulta já cadastrado",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Consulta"
              }
            },
            "application/xml": {
              "schema": {
                "$ref": "#/components/schemas/Consulta"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/Consulta"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Consulta"
                }
              },
              "application/xml": {
                "schema": {
                  "$ref": "#/components/schemas/Consulta"
                }
              }
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "consulta not found"
          },
          "405": {
            "description": "Validation exception"
          }
        }
      },
      "post": {
        "tags": [
          "Consulta"
        ],
        "summary": "Adicionar um novo consulta",
        "description": "Adiciona um novo consulta",
        "operationId": "createConsulta",
        "requestBody": {
          "description": "Cria um novo consulta",
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Consulta"
              }
            },
            "application/xml": {
              "schema": {
                "$ref": "#/components/schemas/Consulta"
              }
            },
            "application/x-www-form-urlencoded": {
              "schema": {
                "$ref": "#/components/schemas/Consulta"
              }
            }
          },
          "required": true
        },
        "responses": {
          "200": {
            "description": "Successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Consulta"
                }
              },
              "application/xml": {
                "schema": {
                  "$ref": "#/components/schemas/Consulta"
                }
              }
            }
          }
        }
      }
    },
    "/Consulta/": {
      "get": {
        "tags": [
          "Consulta"
        ],
        "summary": "Lista todas as consultas",
        "description": "Retorna a lista de todas as consultas",
        "operationId": "getConsultas",
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Consulta"
                }
              },
              "application/xml": {
                "schema": {
                  "$ref": "#/components/schemas/Consulta"
                }
              }
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "consulta not found"
          }
        }
      }
    },
    "/Consulta/{id}": {
      "get": {
        "tags": [
          "Consulta"
        ],
        "summary": "Lista medico por ID",
        "description": "Retorna apenas uma consulta",
        "operationId": "getConsultaById",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "ID of pet to return",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Consulta"
                }
              },
              "application/xml": {
                "schema": {
                  "$ref": "#/components/schemas/Consulta"
                }
              }
            }
          },
          "400": {
            "description": "Invalid ID supplied"
          },
          "404": {
            "description": "consulta not found"
          }
        }
      },
      "delete": {
        "tags": [
          "Consulta"
        ],
        "summary": "Deleta uma consulta",
        "description": "Exclui uma consulta",
        "operationId": "deleteConsulta",
        "parameters": [
          {
            "name": "api_key",
            "in": "header",
            "description": "",
            "required": false,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "id",
            "in": "path",
            "description": "medico id to delete",
            "required": true,
            "schema": {
              "type": "integer",
              "format": "int64"
            }
          }
        ],
        "responses": {
          "400": {
            "description": "Invalid medico value"
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "Paciente": {
        "required": [
          "nome"
        ],
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64",
            "example": 10
          },
          "nome": {
            "type": "string",
            "example": "Joao"
          },
          "dataNascimento": {
            "type": "string",
            "description": "data de nascimento do paciente",
            "example": "2019-05-17T00:00:00.000Z"
          },
          "email": {
            "type": "string",
            "example": "Joao@consultamed.com"
          },
          "Telefone": {
            "type": "string",
            "description": "Telefone do paciente",
            "example": 9691341234
          }
        },
        "xml": {
          "name": "paciente"
        }
      },
      "Medico": {
        "required": [
          "nome"
        ],
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64",
            "example": 10
          },
          "nome": {
            "type": "string",
            "example": "Joao"
          },
          "especialidade": {
            "type": "string",
            "description": "Descrição da especialidade",
            "example": "oncologista"
          },
          "email": {
            "type": "string",
            "example": "drbrasil@consultamed.com"
          },
          "Telefone": {
            "type": "string",
            "description": "Telefone do médico",
            "example": 9691341234
          }
        },
        "xml": {
          "name": "Medico"
        }
      },
      "Consulta": {
        "required": [
          "dataHora"
        ],
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "format": "int64",
            "example": 10
          },
          "dataHora": {
            "type": "string",
            "example": "12/11/1996 16:20"
          },
          "pacienteId": {
            "type": "integer",
            "description": "relacionamento com paciente",
            "example": 1
          },
          "medicoId": {
            "type": "integer",
            "description": "relacionamento com medico",
            "example": 2
          }
        },
        "xml": {
          "name": "Medico"
        }
      }
    },
    "requestBodies": {
      "Consulta": {
        "description": "Consulta precisa de de paciente e medico",
        "content": {
          "application/json": {
            "schema": {
              "$ref": "#/components/schemas/Consulta"
            }
          },
          "application/xml": {
            "schema": {
              "$ref": "#/components/schemas/Consulta"
            }
          }
        }
      }
    },
    "securitySchemes": {
      "petstore_auth": {
        "type": "oauth2",
        "flows": {
          "implicit": {
            "authorizationUrl": "https://petstore3.swagger.io/oauth/authorize",
            "scopes": {
              "write:consulta": "alterar medico da consulta",
              "read:Medico": "Seus medicos"
            }
          }
        }
      },
      "api_key": {
        "type": "apiKey",
        "name": "api_key",
        "in": "header"
      }
    }
  }
};
