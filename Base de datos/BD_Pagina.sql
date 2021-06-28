USE OldTekno
Create table USERLOG(
Alias					varchar(22) not null,
Nombre					varchar(40) not null,
EMAIL					varchar(60) not null,
RUT						varchar(10) not null,
constraint PK_USERLOG	primary key (RUT)
)

Create table USUARIO(
IDUSUARIO                   int,
RUT							varchar(10)		not null,
NOMBRE						varchar(30)		not null,
APELLIDOPATERNO				varchar(80)		not null,
APELLIDOMATERNO				varchar(80)		not null,
FECHANACIMIENTO				date			not null,
DIRECCION					varchar(255)	not null,
TELEFONO					varchar(18)		not null,
CARGO						varchar(50)     not null,
VIGENTE_IND					varchar(1)		not null,
WEB_PASSWORD				varchar(20)		not null,
constraint PK_USUARIO		primary key(IDUSUARIO),
constraint FK_USUARIO_RUT	foreign key (RUT) references USERLOG(RUT),
constraint CHK_Usuario check (CARGO='ADMINISTRADOR' or CARGO='USUARIO'),
constraint CHK_Vigente check (VIGENTE_IND	='S' or VIGENTE_IND	='N')

)
create table CURSOS(
IDCURSO					int				not null,
NOMBRE_CURSO			varchar (150)	not null,
DESCRIPCION				varchar(250)	not null,
UNIDADESTOTALES			int				not null,
constraint PK_IDC		primary key(IDCURSO),
)
create table USUARIOCURSO(
IDUSUARIOCURSO			int			not null,
IDUSUARIO				int			not null,
IDCURSO					int			not null,
FECHAINICIOCURSO		date	not null,
constraint PK_IDUS		primary key(IDUSUARIOCURSO),
constraint FK_IDLOG		foreign key (IDUSUARIO) references USUARIO(IDUSUARIO),
constraint FK_IDCUS		foreign key (IDCURSO) references CURSOS(IDCURSO)
)
go
alter PROCEDURE login_OldTekno
	@rut varchar(13),
	@webpassin varchar(20),
	@mensaje varchar(1000) output
AS
BEGIN
    declare @webpassout varchar(20)

	if exists(select * 
	          from USUARIO 
			   where  RUT=@rut  and VIGENTE_IND='S' and CARGO='USUARIO')
    begin
       select @webpassout=WEB_PASSWORD 
	   from USUARIO 
	      where  RUT=@rut and VIGENTE_IND='S' and CARGO='USUARIO'

	   if @webpassin=@webpassout	   
	      select @mensaje=Alias 
	      from USERLOG 
		     where  RUT=@rut   
	   else
	      set @mensaje='Clave inválida'	   
		
	end
	 
	 else
	    set @mensaje='Verifique los datos para acceder a Sistema Web' 
		 
END
-----Procedimiento busca curso
go
alter PROCEDURE GetCurso
		@idCurso int
AS
BEGIN
	SET NOCOUNT ON;
	select DESCRIPCION+','+UNIDADESTOTALES as infocurso	
	from CURSOS
	where @idCurso=IDCURSO	
	
END
GO



select * USERLOG
insert into USERLOG values('manuel.torres','manuelt','manut1@gmail.com','20206555-4');
insert into USUARIO values('20206555','20206555-4','Manuel','Torres','Carrasco','1998-08-03','alla 123','112234556','ADMINISTRADOR','S','1050');
insert into CURSOS  values(1,'MAMAHUEVAZOXD','En este curso se hablara como decir el pepe','1')
insert into USUARIOCURSO values(1,'20206555',1,'10/11/2020')
exec login_OldTekno '20206555-4','1050','manuel.torres'
insert into USUARIO values('123456','123456-4','Geroge','Jaramillo','Viejo Verde','1998-08-03','alla 123','112234556','USUARIO','S','1050');
insert into USERLOG values('geroge.verde','gerogec','manut1@gmail.com','123456-4');
insert into USERLOG values('ivan.tapia','ivantap','ivan_tap@gmail.com','18732953-1');
insert into USUARIO values('18732953','18732953-1','Ivan','Tapia','Pastenes','1995-08-03','coyhaique','112234556','USUARIO','S','1010');
-----
alter PROCEDURE login_OldTekno_ADMIN
	@rut varchar(13),
	@webpassin varchar(20),

	@mensaje varchar(1000) output
AS
BEGIN
    declare @webpassout varchar(20)
	
	if exists(select * 
	          from USUARIO
			   where  RUT=@rut  and VIGENTE_IND='S' and CARGO='ADMINISTRADOR')
    begin
       select @webpassout=WEB_PASSWORD 
	   from USUARIO 
	      where  RUT=@rut and VIGENTE_IND='S' and CARGO='ADMINISTRADOR'

	   if @webpassin=@webpassout	   
	      select @mensaje=Alias 
	      from USERLOG 
		     where  RUT=@rut   
	   else
	      set @mensaje='Clave inválida'	   
		
	end
	 
	 else
	    set @mensaje='Verifique los datos para acceder a Sistema Web' 
		 
END

insert into USUARIO values('123456','123456-4','Geroge','Jaramillo','Viejo Verde','1998-08-03','alla 123','112234556','USUARIO','S','1050');
insert into USERLOG values('geroge.verde','gerogec','manut1@gmail.com','123456-4');
select * from USUARIO
select * from USERLOG
---------------------------------------
alter procedure [dbo].[InsertarUsuario]
@Id int,
@rut varchar(10),
@nombre varchar(30),
@apellidopaterno varchar(80),
@apellidomaterno varchar(80),
@fechanacimiento date,
@direccion varchar(255),
@telefono varchar(18),
@cargo varchar (50),
@vigente varchar(1),
@contraseña varchar(20),
@email varchar(60),
@mensaje varchar(1000) output
as
begin 
declare @alias varchar (100)

if exists (select * 
	          from USUARIO
			   where  RUT=@rut)
			   begin
			  		  set @mensaje='No se pudo agregar el rut '+@rut+' Porque ya existe'

			   end
if not exists(select * 
	          from USUARIO
			   where  RUT=@rut)
			   begin
		set @alias= @nombre+'.'+@apellidopaterno

insert into USERLOG values(@alias,@nombre,@email,@rut)
insert into USUARIO values(@Id,@rut,@nombre,@apellidopaterno,@apellidomaterno,@fechanacimiento,@direccion,@telefono,@cargo,@vigente,@contraseña)   
set @mensaje='Se ingreso correctamente'
		 
		  end

		

		
			
end

----actualizarrrrrrrrrrrrrrrrrrrrrrrrrrrrr
alter procedure actualizar_contraseña

@rut varchar(10), 
@contranueva varchar(20),
	@mensaje varchar(1000) output

as begin

declare @rutbueno varchar(10)
if exists(select * 
	          from USUARIO
			   where  RUT=@rut)
			   begin
			    select @rutbueno=RUT
	   from USUARIO 
	      where  RUT=@rut 
if @rut=@rutbueno
update usuario set WEB_PASSWORD=@contranueva where rut=@rut
set @mensaje='Se actualizo correctamente'
end
else
set @mensaje='Verifica los datos'
end

---------
create procedure actualizar_vigencia
@rut varchar(10), 
@vigencianueva varchar(20),
@mensaje varchar(1000) output
as begin
declare @rutbueno varchar(10)
if exists(select * 
	          from USUARIO
			   where  RUT=@rut)
			   begin
			    select @rutbueno=RUT
	            from USUARIO 
	             where  RUT=@rut 
if @rut=@rutbueno
update usuario set VIGENTE_IND=@vigencianueva where rut=@rut
set @mensaje='Se actualizo correctamente'

end
else
set @mensaje='Verifica los datos'
end
-----------------------------------------------------------
create procedure Eliminar_usuario
@rut varchar(10),
@mensaje varchar(1000) output
as begin
declare @rutbueno varchar(10)
if exists(select * 
	          from USUARIO
			   where  RUT=@rut)
			   begin
			    select @rutbueno=RUT
	            from USUARIO 
	             where  RUT=@rut 
if @rut=@rutbueno
delete from USUARIO where rut=@rut
delete from USERLOG where rut=@rut
set @mensaje='Se elimino correctamente'

end
else
if @rut=''
set @mensaje='Llene los campos correctamente'

else
set @mensaje='Ingresa un rut existente'
end
