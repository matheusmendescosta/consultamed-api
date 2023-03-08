/**
	@author: Matheus Mendes
	github: https://github.com/matheusmendescosta
  linkedin: https://www.linkedin.com/in/matheusmendescosta/
  base de dados para o agendamento de consultas
**/
drop database agendamento_development;

create database agendamento_development;

use agendamento_development;

create table pacientes(
  id int primary key not null auto_increment,
  nome varchar(250),
  data_nascimento date not null,
  telefone varchar(250),
  email varchar(250)
);
create table medicos(
  id int primary key not null auto_increment,
  nome varchar(250),
  especialidade varchar(250),
  telefone varchar(250),
  email varchar(250)
 );
create table consultas(
  id int primary key not null auto_increment,
  data_hora datetime not null,
  paciente_id int not null,
  medico_id int not null,
  foreign key (paciente_id) references pacientes(id),
  foreign key (medico_id) references medicos(id)
);
create table historico_consultas(
  id int primary key not null auto_increment,
  consulta_id int not null,
  data_hota datetime not null,
  tratamento varchar(1000),
  sintomas varchar(1000),
  diagnostico varchar(1000),
  foreign key (consulta_id) references consultas(id)
);  