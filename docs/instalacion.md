# Instalación

Sigue estos pasos para instalar PECANO en tu entorno de desarrollo:

## Instalar SQL Server

Ir a:
`PECANO/SQL Server 2000 Personal/x86/setupsetupsql.exe`

- Hacer clic derecho en `setupsql.exe` > **Propiedades** > **Compatibilidad**
- Ejecutar este programa en modo de compatibilidad `Windows XP (Service Pack 2)`
- Habilitar `Ejecutar este programa como administrador`

Luego de aplicar los cambios y aceptar la configuracion

- Ejecutar `setupsql.exe` como administrador

??? warning "Advertencia"
    Seguramente aparecerán errores durante la instalación de SQL server. Reiniciar el equipo y volver a ejecutar el instalador solo una vez mas


![Información del usuario](imagenes/instalacion/infousuario.png){ width="350" }
/// caption
Este paso consiste en ingresar los datos básicos del usuario. Asegúrate de completar todos los campos requeridos.
///

![Definición de instalación](imagenes/instalacion/definicioninst.png){ width="350" }
/// caption
Aquí se define el tipo de instalación. Selecciona la opción más adecuada para el entorno donde se instalará el sistema.
///





---



## Instalar Pecano


Ir a:
`Pecano Install > ALLPECANO > Instalador Pecano > INSTALADOR_PECANO`

- Ejecutar `INSTALADOR_PECANO.exe` como administrador
- Pedirá una contraseña: **1234567**

En el proceso se ejecutará el conector:
`ConexionPecano_ERPBusiness`

- Contraseña generada al abrir: `(Hora+mes)+(día)+(minuto)` (del momento de ejecución)

Cuando pida el nombre del servidor central, usar:
**SCCEEC-TCN**

Para la versión 33:
- Ejecutar `actualizar pecano -z`
- Luego ir a: `C:/Aplicaciones/Pecano`
- Ejecutar: `INSTALACION_RAPIDA.exe`

<!-- ![Imagen instalador PECANO](img/instalador_pecano.png) -->

Copiar desde `Aplicaciones > Componentes Pecano`  
Hacia: `C:/Aplicaciones/`

---

### 3. Actualizar PECANO (con versión actual)

- Copiar archivos de la nueva versión a:
  - `C:/Aplicaciones/Componentes Pecano`
  - `C:/Aplicaciones/Pecano`

- Renombrar `C:/Aplicaciones/Pecano/Formatos` a `Formatosyyy`

Desde la carpeta actualizada:
- Ejecutar como administrador: `z – Actualizar Pecano.bat`

Luego en `C:/Aplicaciones/Pecano`:
- Ejecutar `INSTALACION_RAPIDA.exe`
- ⚠️ Pedirá reiniciar, **NO** reiniciar en este momento

Después:
- Eliminar la carpeta “Formatos” recién creada
- Renombrar `Formatosyyy` nuevamente a `Formatos`

👉 *Opcional:* Cambiar el formato de fecha de Windows para compatibilidad.

<!-- ![Imagen actualización](img/actualizar_pecano.png) -->

---

### 4. Verificar que la computadora esté lista

- Abrir PECANO e iniciar sesión

Si aparece el mensaje **"Su computadora no está registrada"**, ir a:
`Pecano > Central Contable > Equipos > Nuevo`

Agregar manualmente la máquina desde el sistema central.

<!-- ![Imagen registro equipo](img/registro_equipo.png) -->

---

> 💡 Recomendación: Documenta cualquier cambio de configuración adicional en cada estación para evitar futuros errores.
