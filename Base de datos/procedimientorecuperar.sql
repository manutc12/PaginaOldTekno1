alter PROCEDURE [dbo].[EnviarRecuperar]
	@rut varchar(12),
	@motivo varchar(200),
	@mensajecontacto varchar(8000),
	@mensaje varchar(1000) output
AS
BEGIN
declare @rutbueno varchar(10)


if exists(select * 
	          from USUARIO
			   where  RUT=@rut and @motivo='' and @mensajecontacto='')
			   set @mensaje='Llene todos los campos'

else
if exists(select * 
	          from USUARIO
			   where  RUT=@rut and @motivo='' and @mensajecontacto!='')
			   set @mensaje='Ingrese el asunto'
else

if exists(select * 
	          from USUARIO
			   where  RUT=@rut and @motivo!='' and @mensajecontacto='')
			   set @mensaje='Ingresa un mensaje'
			   else
			   if exists(select * 
	          from USUARIO
			   where  RUT='' or @motivo='' or @mensajecontacto='')
			   set @mensaje='Llene todos los campos'

END

if exists(select * 
	          from USUARIO
			   where  RUT=@rut and @motivo!='' and @mensajecontacto!='')
			   begin
			    select @rutbueno=RUT
	   from USUARIO 
	      where  RUT=@rut 
if @rut=@rutbueno 

SET NOCOUNT ON;

	declare @emailAprobador  varchar(60),
	        @asunto varchar(100),
			@contraseña  varchar(20), 
			@nombre1 varchar(max),
			@copiaoculta varchar(max),
			@email varchar(max),
			@intro  varchar(150),
			@intro2  varchar(8000)
			set @asunto= @motivo
			set @emailAprobador=(select EMAIL from USERLOG where RUT=@rut)
		    set @email      = 'Old.Tekno.Soporte@gmail.com'
			set @intro      ='La cuenta relacionada con el correo '+' '+@emailAprobador+' '+' del usuario '
	        set @intro2=   @intro+@mensajecontacto


    EXEC		msdb.dbo.sp_send_dbmail 
	            @profile_name='oldtekno',
		        @recipients= @email,
		        @blind_copy_recipients =@copiaoculta	,			  
		        @subject = @asunto,
		        @body = @intro2,	
		        @body_format = 'HTML',
				@importance ='High'	


	set @mensaje='El correo a '+' ' +@email +'' +' ha sido enviado exitosamente'
	
end
else 
	set @mensaje='Ingrese un rut correcto'

	



