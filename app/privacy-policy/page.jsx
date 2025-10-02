export default function PrivacyPolicyPage() {
  return (
    <div className="container py-12 md:py-24">
      <h1 className="text-3xl font-bold mb-8">Politique de Confidentialité</h1>

      <div className="prose max-w-none">
        <p className="text-lg mb-6">Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
        <p>
          Bienvenue sur le portfolio d'Ismail MOUYAHADA. La protection de vos données personnelles est une priorité pour
          nous. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons
          vos informations lorsque vous visitez notre site web.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">2. Données collectées</h2>
        <p>Nous collectons les types d'informations suivants :</p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Informations personnelles</strong> : Nom, adresse e-mail, numéro de téléphone lorsque vous
            remplissez notre formulaire de contact ou de prise de rendez-vous.
          </li>
          <li>
            <strong>Données de navigation</strong> : Adresse IP, type de navigateur, pages visitées, temps passé sur le
            site, et autres statistiques similaires.
          </li>
          <li>
            <strong>Cookies</strong> : Nous utilisons des cookies pour améliorer votre expérience sur notre site.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">3. Utilisation des données</h2>
        <p>Nous utilisons vos données pour :</p>
        <ul className="list-disc pl-6 mb-6">
          <li>Vous contacter suite à une demande de votre part</li>
          <li>Gérer vos rendez-vous et vous envoyer des confirmations</li>
          <li>Améliorer notre site web et nos services</li>
          <li>Analyser l'utilisation de notre site</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">4. Partage des données</h2>
        <p>
          Nous ne vendons pas vos données personnelles à des tiers. Nous pouvons partager vos informations avec des
          prestataires de services qui nous aident à gérer notre site et nos services (comme des services d'hébergement
          ou d'envoi d'emails).
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">5. Sécurité des données</h2>
        <p>
          Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données contre tout accès non
          autorisé, altération, divulgation ou destruction. Toutes les données personnelles que vous nous fournissez
          sont stockées sur des serveurs sécurisés et chiffrées lors de la transmission.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">6. Conservation des données</h2>
        <p>
          Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux fins pour lesquelles nous
          les avons collectées, y compris pour satisfaire aux exigences légales, comptables ou de déclaration.
        </p>
        <p>
          Les données de contact et de rendez-vous sont conservées pendant une période de 3 ans à compter de votre
          dernier contact avec nous. Après cette période, les données sont soit supprimées, soit anonymisées.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">7. Vos droits</h2>
        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
        <ul className="list-disc pl-6 mb-6">
          <li>
            <strong>Droit d'accès</strong> : Vous pouvez demander une copie des données personnelles que nous détenons à
            votre sujet.
          </li>
          <li>
            <strong>Droit de rectification</strong> : Vous pouvez demander la correction de données inexactes ou
            incomplètes.
          </li>
          <li>
            <strong>Droit à l'effacement</strong> : Vous pouvez demander la suppression de vos données personnelles dans
            certaines circonstances.
          </li>
          <li>
            <strong>Droit à la limitation du traitement</strong> : Vous pouvez demander la restriction du traitement de
            vos données.
          </li>
          <li>
            <strong>Droit à la portabilité des données</strong> : Vous pouvez demander le transfert de vos données à un
            autre service.
          </li>
          <li>
            <strong>Droit d'opposition</strong> : Vous pouvez vous opposer au traitement de vos données à des fins de
            marketing direct.
          </li>
        </ul>
        <p>
          Pour exercer ces droits, veuillez nous contacter à l'adresse email indiquée ci-dessous. Nous répondrons à
          votre demande dans un délai d'un mois.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">8. Cookies</h2>
        <p>
          Notre site utilise des cookies pour améliorer votre expérience. Les cookies sont de petits fichiers texte
          stockés sur votre appareil qui nous aident à :
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li>Comprendre comment vous utilisez notre site</li>
          <li>Mémoriser vos préférences</li>
          <li>Fournir des fonctionnalités comme le mode sombre</li>
          <li>Améliorer la sécurité du site</li>
        </ul>
        <p>
          Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour être averti lorsqu'un cookie est
          envoyé. Cependant, certaines fonctionnalités du site peuvent ne pas fonctionner correctement si les cookies
          sont désactivés.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">9. Modifications de la politique de confidentialité</h2>
        <p>
          Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons de tout
          changement en publiant la nouvelle politique de confidentialité sur cette page et en mettant à jour la date de
          "dernière mise à jour".
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact</h2>
        <p>
          Si vous avez des questions concernant cette politique de confidentialité ou sur la façon dont nous traitons
          vos données personnelles, veuillez nous contacter à :{" "}
          <a href="mailto:contact@example.com" className="text-accent hover:underline">
            contact@example.com
          </a>
        </p>
        <p>
          Si vous n'êtes pas satisfait de notre réponse, vous avez le droit de déposer une plainte auprès de l'autorité
          de protection des données de votre pays.
        </p>
      </div>
    </div>
  )
}
