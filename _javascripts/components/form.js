import Ajax from 'simple-ajax';

export default class Form {
  constructor() {
    if (document.querySelector('body').classList.contains('contact')) {
      document.querySelector('form[name="contact"]').addEventListener('submit', this.sendFromContact.bind(this));
    }
    if (document.querySelector('body').classList.contains('shipyard')) {
      document.querySelector('form[name="hivernage"]').addEventListener('submit', this.sendFromHivernage.bind(this));
    }
    if (document.querySelector('body').classList.contains('home')) {
      document.querySelector('form[name="hivernage"]').addEventListener('submit', this.sendFromHivernage.bind(this));
    }
  }

  /**
   * sending contact form throught Formspree
   */
  sendFromContact(e) {
    e.preventDefault();

    let name = document.querySelector('#name').value,
        email = document.querySelector('#email').value,
        subject = document.querySelector('#subject').value,
        message = document.querySelector('#message').value;

    var ajax = new Ajax({
      url: 'https://formspree.io/matthieu.turmel@aquaboat.ch',
      method: 'POST',
      data: {
        name: name,
        email: email,
        subject: subject,
        message: message
      },
      dataType: 'json'
    });

    ajax.on('success', function() {
      document.querySelector('.contact__message--success').classList.toggle('hidden');
      document.querySelector('form[name="contact"]').reset();
    });

    ajax.on('error', function() {
      document.querySelector('.contact__message--error').classList.toggle('hidden');
    });

    ajax.send();
  }

  /**
   * sending hivernage form throught Formspree
   */
  sendFromHivernage(e) {
    e.preventDefault();

    let firstname = document.querySelector('#firstname').value,
        lastname = document.querySelector('#lastname').value,
        address = document.querySelector('#address').value,
        city = document.querySelector('#city').value,
        npa = document.querySelector('#npa').value,
        phone = document.querySelector('#phone').value,
        email = document.querySelector('#email').value,
        brand = document.querySelector('#brand').value,
        model = document.querySelector('#model').value,
        immatriculation = document.querySelector('#immatriculation').value,
        place = document.querySelector('#place').value,
        port = document.querySelector('#port').value,
        length = document.querySelector('#length').value,
        width = document.querySelector('#width').value,
        engineNumber = document.querySelector('#engine-number').value,
        hivernageDate = document.querySelector('#hivernage-date').value,
        waterDate = document.querySelector('#water-date').value,
        engineType = document.querySelector('#inbord:checked') ? 'Inbord' : 'Outbord',
        stockage = document.querySelector('#stockage:checked') ? 'on' : 'off',
        stockageInt = document.querySelector('#stockage-int:checked') ? 'on' : 'off',
        clean = document.querySelector('#clean:checked') ? 'on' : 'off',
        engineWinter = document.querySelector('#engine-winter:checked') ? 'on' : 'off',
        cleanInt = document.querySelector('#clean-int:checked') ? 'on' : 'off',
        serviceEngine = document.querySelector('#service-engine:checked') ? 'on' : 'off',
        wc = document.querySelector('#wc:checked') ? 'on' : 'off',
        protection = document.querySelector('#protection:checked') ? 'on' : 'off',
        antifoulling = document.querySelector('#antifoulling:checked') ? 'on' : 'off',
        polish = document.querySelector('#polish:checked') ? 'on' : 'off',
        cleanBache = document.querySelector('#clean-bache:checked') ? 'on' : 'off',
        message = document.querySelector('#message').value;

    var ajax = new Ajax({
      url: 'https://formspree.io/matthieu.turmel@aquaboat.ch',
      method: 'POST',
      data: {
        _subject: 'Inscription hivernage - Aquaboat',
        _cc: email,
        'Prenom' : firstname,
        'Nom' : lastname,
        'Adresse' : address,
        'Ville' : city,
        'NPA' : npa,
        'Telephone' : phone,
        'Email' : email,
        'Marque' : brand,
        'Model' : model,
        'Immatriculation' : immatriculation,
        'Place' : place,
        'Port' : port,
        'Longeur' : length,
        'Largeur' : width,
        'Type de moteur ' : engineType,
        'Nombdre de moteur' : engineNumber,
        'Date d\'hivernage' : hivernageDate,
        'Date mise à l\'eau' : waterDate,
        'Stockage du bateau en extérieur' : stockage,
        'Stockage du bateau en intérieur' : stockageInt,
        'Nettoyage intérieur complet' : cleanInt,
        'Nettoyage carène et coque' : clean,
        'Hivernage du moteur' : engineWinter,
        'Hivernage WC, réservoire eau claire / usée' : wc,
        'Service moteur (recommandé)' : serviceEngine,
        'Protection du bateau avec une bâche thermoformée (recommandé)' : protection,
        'Antifoulling (sur-couchage)' : antifoulling,
        'Polish rapide de la coque' : polish,
        'Nettoyage de la bâche' : cleanBache,
        'Autre(s) travaux' : message
      },
      dataType: 'json'
    });

    ajax.on('success', function() {
      document.querySelector('.contact__message--success').classList.toggle('hidden');
      document.querySelector('form[name="hivernage"]').reset();
    });

    ajax.on('error', function() {
      document.querySelector('.contact__message--error').classList.toggle('hidden');
    });

    ajax.send();
  }
}