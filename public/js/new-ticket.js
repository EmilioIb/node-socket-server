const currentTicketLbl = document.querySelector('#lbl-new-ticket');
const createTicketButton = document.querySelector('button');

async function getLastTicket() {
  const lastTicket = await fetch('/api/ticket/last').then(res => res.json());
  console.log(lastTicket);
  currentTicketLbl.innerHTML = lastTicket;
}

async function createTicket() {
  const newTicket = await fetch('/api/ticket', {
    method: 'POST',
  }).then(res => res.json());
  currentTicketLbl.innerHTML = newTicket.number;
}

createTicketButton.addEventListener('click', createTicket);

getLastTicket();
