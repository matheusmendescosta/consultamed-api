export const swaggerDocument = 
    {
        "openapi": "3.0.3",
        "info": {
          "title": "consultamed - API 1.0.0",
          "description": "Consultamed é uma simples api para cadastro de medicos, pacientes, consulta e historicos de consultas, abaixo você encontrar os endpoint para realizar create, update, get e delete.\n\n_Api em desenvolvimento em projeto open source caso queira contribuir enviar um PR clicando [aqui](https://github.com/matheusmendescosta/consultamed-api)._\n\nAlguns links úteis:\n- [Repositorio consultamed](https://github.com/matheusmendescosta/consultamed-api)",
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
            "name": "paciente",
            "description": "Tudo sobre a rota paciente",
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
                "paciente"
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
                  "description": "Pet not found"
                },
                "405": {
                  "description": "Validation exception"
                }
              }
            },
            "post": {
              "tags": [
                "paciente"
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
                "paciente"
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
                  "description": "Pet not found"
                }
              },
              "security": [
                {
                  "api_key": []
                },
                {
                  "petstore_auth": [
                    "write:pets",
                    "read:pets"
                  ]
                }
              ]
            }
          },
          "/paciente/{id}": {
            "get": {
              "tags": [
                "paciente"
              ],
              "summary": "Lista paciente por ID",
              "description": "Retorna apenas um paciente",
              "operationId": "getPacienteById",
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
                  "description": "Pet not found"
                }
              },
              "security": [
                {
                  "api_key": []
                },
                {
                  "petstore_auth": [
                    "write:pets",
                    "read:pets"
                  ]
                }
              ]
            },
            "delete": {
              "tags": [
                "paciente"
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
                  "description": "Pet id to delete",
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
            "ApiResponse": {
              "type": "object",
              "properties": {
                "code": {
                  "type": "integer",
                  "format": "int32"
                },
                "type": {
                  "type": "string"
                },
                "message": {
                  "type": "string"
                }
              },
              "xml": {
                "name": "##default"
              }
            }
          },
          "requestBodies": {
            "Pet": {
              "description": "Pet object that needs to be added to the store",
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
            }
          },
          "securitySchemes": {
            "petstore_auth": {
              "type": "oauth2",
              "flows": {
                "implicit": {
                  "authorizationUrl": "https://petstore3.swagger.io/oauth/authorize",
                  "scopes": {
                    "write:pets": "modify pets in your account",
                    "read:pets": "read your pets"
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
