import PropTypes from 'prop-types';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { changePrice } from '../helper/price';
import { connect } from 'react-redux';
import Link from 'next/link';
import Header from '../components/header/header';
import Meta from '../components/seo/meta';

const Gracias = ({ ticket, currency }) => {
  const doc = new jsPDF();

  const createPDF = async () => {
    doc.setFontSize(25)
    doc.text(35,25, `Gracias por tu compra ${ticket?.name}`);
    const y = 40;
    const x = 35;
    doc.setFontSize(10)
    ticket?.advanced && doc.text(x+70, y, `Enganche: ${changePrice(ticket?.advanced, currency)}`)
    ticket?.msi && doc.text(x, y, `Cuotas: ${ticket?.msi} mes(es)`)
    if (ticket?.products){
      ticket?.products.map(item => {
        doc.setLineWidth(1)
        doc.line(x+140, y+=10, x, y)
        doc.text(x, y+=10, `Modelo: ${item?.name}`);
        doc.text(x+70, y, `Marca: ${item?.maker}`);
        doc.text(x, y+=10, `Tipo de carro: ${item?.car_type}`);
        doc.text(x+70, y, `Costo: ${changePrice(item, currency)}`);
        item?.selectedColor && doc.text(x, y+=10, `Color: ${item?.selectedColor}`);
      })
    }
    autoTable(doc, {body: ticket?.deadlines, columns: [{header: 'Mes', dataKey: 'month'}, {header: 'Pago', dataKey: 'pay'}], startY: y+=10})
    doc.save('test.pdf'); 
  }

  const downloadTicket = () => {
    createPDF();
  }
  return (
    <>
      <Meta title="GRACIAS POR TU COMPRA | AUTOS CANCÚN"  description="MUCHAS GRACIAS POR CONFIAR EN NOSOTROS" />
      <Header notShoppingCart notCurrency />
      <div className="flex flex-col items-center m-auto">
        <h1 className="font-bold text-4xl py-8">Gracias por tu compra</h1>
        <div className="py-2">
          <h2 className="text-2xl font-medium">
            Descarga tu ticket presionando <button type="button" onClick={downloadTicket} className="text-cyan-500 text-3xl" >AQUÍ</button>
          </h2>
        </div>
        <Link href="/"><button type="button" className="bg-grisaceo-400 text-white text-3xl p-3  my-3 text-center rounded-xl" >Regresar al inicio</button></Link>
      </div>
    </>
  );
}

Gracias.propTypes = {
  ticket: PropTypes.instanceOf(Object).isRequired,
  currency: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  const { currency, ticket } = state.data;
  return { currency, ticket };
}

export default connect(mapStateToProps, null)(Gracias);