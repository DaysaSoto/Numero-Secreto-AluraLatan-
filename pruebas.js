/*
const { Builder, By, Key } = require("selenium-webdriver");

(async function testJuego() {

  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("C:/Users/User/Desktop/2035-logica-programacion-2-ProyectoInicial/index.html");

    // Localiza elementos
    let inputNum = await driver.findElement(By.id("valorUsuario"));
    let botonReiniciar = await driver.findElement(By.id("reiniciar"));
    let mensaje = await driver.findElement(By.tagName("p"));


    await inputNum.sendKeys("5", Key.RETURN);


    let textoMensaje = await mensaje.getText();
    console.log("Resultado:", textoMensaje);


    await botonReiniciar.click();

  } finally {
    // Cierra el navegador
    await driver.quit();
  }
})();
*/

const { Builder, By, Key } = require("selenium-webdriver");

(async function testJuego() {
  // Inicia navegador (Chrome)
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    // Cargar tu archivo index.html (ajusta la ruta a tu PC)
    await driver.get("C:/Users/User/Desktop/2035-logica-programacion-2-ProyectoInicial/index.html");

    // Localizar elementos principales
    let inputNum = await driver.findElement(By.id("valorUsuario"));
    let botonReiniciar = await driver.findElement(By.id("reiniciar"));
    let mensaje = await driver.findElement(By.tagName("p"));

    console.log("=== INICIO DE PRUEBA AUTOMATIZADA ===");

    // Probar números del 1 al 10
    for (let i = 1; i <= 10; i++) {
      // Escribir número y presionar Enter
      await inputNum.sendKeys(i.toString(), Key.RETURN);

      // Leer mensaje en pantalla
      let textoMensaje = await mensaje.getText();
      console.log(`Intento ${i}: ${textoMensaje}`);

      // Si acertó, salir del bucle
      if (textoMensaje.includes("Acertaste") || textoMensaje.includes("acertaste")) {
        console.log(` Número secreto encontrado: ${i}`);
        break;
      }

      // Limpiar caja antes del próximo intento
      inputNum = await driver.findElement(By.id("valorUsuario"));
      await inputNum.clear();
    }

    // Reiniciar el juego
    await botonReiniciar.click();
    console.log(" Juego reiniciado correctamente.");

    console.log("=== FIN DE PRUEBA ===");
  } catch (error) {
    console.error(" Error en la prueba:", error);
  } finally {
    // Cerrar navegador
    await driver.quit();
  }
})();
