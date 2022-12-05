import { appLocalState } from "./state";

const monthNames = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep", "Oct", "Nov", "Dec"];
const invoiceCount = document.querySelector(".invoice-count");
function loadLocalInvoices(file_name, callback) {
  fetch(file_name).then((res)=> res.json())
  .then((data) => {
    callback(data);
  });
}
function createInvoice(invoiceObj) {
  const li = document.createElement("li");
  const date = invoiceObj.paymentDue.split("-");
  li.className = "list-item";
  const invoiceTemplate = `
              <a class="list-item-link" href="#R3080">
                <p class="list-item-id">
                  <span class="hash-txt">#</span>${invoiceObj.id}
                </p>
                <p class="list-item-date">${"Due " + date[2].concat(" ", monthNames[Number(date[1])]," ", date[0])}</p>
                <p class="list-item-name">${invoiceObj.clientName}</p>
                <p class="list-item-amount">&euro;${invoiceObj.total}</p>
                <p class="list-item-btn ${invoiceObj.status.concat("-btn")}">
                  <span class="list-item-btn-dot ${invoiceObj.status.concat(
    "-btn-dot"
  )}"></span>
    ${invoiceObj.status[0].toUpperCase().concat(invoiceObj.status.slice(1))}
                </p>
                <img
                  class="list-item-img"
                  src="public/assets/icon-arrow-right.svg"
                />
              </a>
  `;
  li.innerHTML = invoiceTemplate;
  return li;
}

function renderInvoice(invoiceObj, element) {
  element.appendChild(createInvoice(invoiceObj));
  appLocalState.invoiceCount += 1;
}

function renderInvoices(invoiceData) {
  const element = document.querySelector(".invoice-list");
  invoiceData.forEach((invoiceObj) => {
    renderInvoice(invoiceObj, element);
  });

  invoiceCount.textContent = appLocalState.invoiceCount;
}


export {loadLocalInvoices, renderInvoice, renderInvoices};
