/**
	@author: Matheus Mendes
	github: https://github.com/matheusmendescosta
  linkedin: https://www.linkedin.com/in/matheusmendescosta/
  base de dados para o agendamento de consultas
**/
drop database agendamento_development;

create database agendamento_development;

use agendamento_development;

create table pacientes (
  id int not null,
  nome varchar(150),
  data_nascimento date not null,
  telefone varchar(150),
  email varchar(250),
  primary key (id)
);

create table medicos (
  id int not null primary key,
  nome varchar(250),
  especialidade varchar(250),
  telefone varchar(250),
  email varchar(250),
);

create table consultas (
  id int primary key not null,
  data_hora datetime,
  id_paciente primary key (id) references (id)
  id_medico primary key (id) references (id)
);

create table historico_consultas (
  id int primary key not null,
  id_paciente int foreign key (id_paciente),
  id_medico int foreign key (id_medico),
  data_hota datetime,
  diagnostico varchar(1000)
);  