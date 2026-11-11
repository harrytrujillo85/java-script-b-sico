// Calcular la ganancia del vendedor
// suma la ganancia del valor del vehiculo = precio venta
// calcular el impuesto (6%)sobre el precio de venta
// sumar el precio de venta + el impuesto = costo total

// Valores definidos directamente por eeeel anunciado del taller:
const ValorVehiculo = 35000000;
const porcentajeGanacias = 12;
const porcentajeImpuesto = 6;

// paso . calcular cuanto dinero gana el vendedor
const ganaciasVendedor = (ValorVehiculo * porcentajeGanacias) / 100;

// paso 2. El precio de venta es el valor del vehiculo
const precioVentas = ValorVehiculo + ganaciasVendedor;

// paso 3. Calculor el impuesto sobre el precio de venta (No sobre el vehiculo)
const impuestoVenta= (precioVentas * porcentajeImpuesto) / 100;

// paso 4. El costo totsl wur paga el comprador es el precio de ventas + impuesto
const costoTotal = precioVentas + impuestoVenta;

console.log("Valor del vehiculo :$ ", ValorVehiculo);
console.log("Porcentaje de ganancias: ", porcentajeGanacias, "%");
console.log("ganacias del vendedor :$ ", ganaciasVendedor);
console.log("precio de venta de impuestos $: ", impuestoVenta);
console.log("porcentaje d impuestos: $", porcentajeImpuesto, "%");
console.log("impuesto sobre la venta: $", impuestoVenta);
console.log("costo total : $", costoTotal);







