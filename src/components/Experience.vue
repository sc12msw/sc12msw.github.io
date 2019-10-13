<template>
  <section class="flex-col flex">
    <h1 class="text-3xl">Work Experience</h1>
    <div class="bg-gray-100 p-3 my-2">
      <h2 class="text-xl">Morrisons Plc</h2>
      <h3
        class="text-2xl text-green-900 text-highlight"
      >Technology Specialist - Developer - October 2018 - Present</h3>
      <ul class="list-disc pl-4">
        <li class="pb-4">
          Developed a
          <span class="font-bold">Dropwizard</span> Microservice to Route XML swipes from the Clocking in machines in Morrisons stores to a new third party service called reflexis and to an existing legacy Oracle system. Deployed on a legacy in house server using a
          <span
            class="font-bold"
          >Freestyle Jenkins Job</span> and internal
          <span class="font-bold">Sonarqube</span> quaility gate analysing the
          <span class="font-bold">JUnit4</span> unit testing / code quality.
        </li>
        <li class="pb-4">
          Contribute greatly to improving developers on the Storepick project at Morrisons to help improve code quaility and delivery velocity. Such as reviewing many third party pull requests, developing a
          <span
            class="font-bold"
          >Python Pip package</span> with its own pipeline so every developer on the project can contribute with common tasks that everyone can benefit from not having to reinvent the wheel each time they are using Ocado APIs. I did this by using the Internal Morrisons
          <span
            class="font-bold"
          >Nexus</span> so the library would be availble to all developers in the company with the appropriate pip configuration.
        </li>
        <li class="pb-4">
          Developed an AWS lambda to notify staff customers arriving in store click and collect. It allowed users to click a button on the frontend to notify staff instore that they had arrived by using the internal Ocado APIs. This was created in
          <span
            class="font-bold"
          >Python</span> and I also created the
          <span class="font-bold">Multibranch Pipeline using Jenkins</span>.
          Which runs through various enviroments which ran
          <span class="font-bold">Nose2</span> Unit testing,
          <span class="font-bold">Pytest BDD</span> End to End testing Senarios,
          <span class="font-bold">Artillery</span> performance tests and infrastructure creation using
          <span class="font-bold">Terraform</span>.
        </li>
        <li class="pb-4">
          Developed a frontend boilerplate with
          <span
            class="font-bold"
          >Vuejs, Webpack, Jest, Pytest PDD, Jenkins</span> multibranch Pipeline and
          <span class="font-bold">Terraform</span> to create the Cloud Front S3 Origin infrastructure. To allow frontends to develop and deploy with more effciency and speed.
        </li>
        <li class="pb-4">
          Given detailed talks/presentations to many new and existing contractors, on the use of
          <span
            class="font-bold"
          >GitFlow</span> and
          <span class="font-bold">Jenkins</span> at Morrisons.
        </li>
        <li class="pb-4">
          Researching new technology and introducing the automation of tasks wherever possible. Such as creating Microservice/Ecstask boilerplates with multibranch pipelines to
          help contractors get started quicker with how to follow Morrisons guides and secret storeage. Also developed a frontend for the internal configuration service to
          allow non technical project managers create basic project configuration for deployments.
        </li>
      </ul>
    </div>
    <div class="bg-gray-100 p-3 my-2">
      <h2 class="text-xl">Amina Technologies Ltd</h2>
      <h3
        class="text-2xl text-green-900 text-highlight"
      >Software Developer February 2016 – October 2018</h3>
      <ul class="list-disc pl-4">
        <li class="pb-4">
          Developed a mobile application to allow people to clock in and out of the company and various other HR tasks like booking a holiday.
          This allowed for manual tasks such as tracking hours worked to be automated within the company. (Android / Java / JUnit)
        </li>
        <li class="pb-4">
          Replaced original static HTML site with self made theme and advanced custom fields CMS. Each country Amina has a distributor has its own site that can be maintained and changed by themselves with an easy to use interface. Since joining and implementing this project Amina has seen its highest ever revenues. (PHP/
          Wordpress/
          Jquery/
          Sass/
          Gulp)
        </li>
        <li class="pb-4">
          Automated warehouse product barcoding by creating a plugin that integrated directly into the website. Previously was done manually with excel. Now all barcodes are created automatically and labels printed via the website by any operative with valid access rights, which requires very little training. (Python/
          Django/
          PHP/
          Wordpress/
          Jquery/
          Sass/
          Gulp/
          ZPL/
          CUPS)
        </li>
        <li
          class="pb-4"
        >Researching new technology and introducing the automation of tasks wherever possible. Such as using Vagrant to create reusable virtual environments to avoid repetitive configuration and Gulp to automate some scss/js tasks.</li>
        <li
          class="pb-4"
        >Starting the migration of many different software packages into a single ERP to improve digital efficiency in the company. As the budget for software isn’t that large I suggested the use of an Open Source ERP. (ERPNext/Python).</li>
        <li
          class="pb-4"
        >Assisting in IT operations of the business such as offering advice on software best practices such as implementing the use of GSuite rather than locally hosting all backups/emails and helping with GDPR compliance.</li>
        <li class="pb-4">
          Implementing all the hosting and configuration for the web applications. E.g. Setting up firewalls on the host such as whitelisting the companies IP so only they can login to the printing application server. (UFW/
          Linux/
          Apache/
          MySQL/
          PostGRES/
          SSL/
          Certbot/
          DigitalOcean)
        </li>
      </ul>
    </div>
    <div class="bg-gray-100 p-3 my-2">
      <h2 class="text-xl">Exec Software</h2>
      <h3
        class="text-2xl text-green-900 text-highlight"
      >Technical Support Assistant - July 2015 – February 2016</h3>
      <p
        class="pb-4"
      >Providing technical support, assisting in software development including testing and creating SQL scripts</p>
    </div>

    <div class="bg-gray-100 p-3 my-2">
      <h2 class="text-xl">University of Leeds</h2>
      <h3
        class="text-2xl text-green-900 text-highlight"
      >Residence Subwarden - September 2013 – July 2014</h3>
      <p
        class="pb-4"
      >Supervising students, acting as an authority figure. Holding responsibility for students</p>
    </div>
    <div class="bg-gray-100 p-3 my-2">
      <h2 class="text-xl">Dytecna Defence Systems</h2>
      <span class="text-2xl text-green-900 text-highlight">Electro-mechanical Technician - 2012</span>
      <p class="pb-4">Assembling electronic devices for the SAS</p>
    </div>
    <div class="bg-gray-100 p-3 my-2">
      <h2
        class="text-xl"
      >Temp work for Various agencies mainly working at The Disney Store and Toyota</h2>
      <h3
        class="text-2xl text-green-900 text-highlight"
      >Warehouse Worker - Various Times in 2009-2011</h3>
      <p class="pb-4">Organising and picking stock, operating warehouse equipment.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "Experience"
};
</script>