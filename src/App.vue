<template>
  <div id="app" class="antialiased">
    <div class="flex bg-gray-300 min-h-screen md:py-8">
      <div class="max-w-5xl mx-auto bg-white relative flex-1">
        <Nav>
          <NavItem name="Info" :selected="true">
            <MyInfo name="Matt Watson" title="Full Stack Developer" />
          </NavItem>
          <NavItem name="Education" :selected="false">
            <Education />
          </NavItem>
          <NavItem name="Skills" :selected="false">
            <section>
              <h1 class="text-3xl">Technical Skills</h1>
              <Skill
                title="Java"
                :logoUrl="Java"
                logoAlt="Java Logo"
                detail="One year experience using java to create microservices with Jersey/Junit (and other various frameworks). 
              Most recent project was a service to handle swipes from Employees clocking into stores at Morrisons and routing 
              them between legacy system and new third party implementation called reflexis."
              />
              <Skill
                title="Python"
                :logoUrl="Python"
                logoAlt="Python Logo"
                detail="Two years experience using Python to create websites with Django, serverless aws lambdas and microservices using Flask. 
                One year experience using Pytest BDD and Nose2 with exensive use of Boto3 testing infrastructure terraform deployments on AWS. 
                Most recent project was the creation of a Python pip package to host on Morrions private nexus. 
                That is used to interact with Ocado services that can be reused by various development teams when needing to interact with the third party."
              />
              <Skill
                title="Devops"
                :logoUrl="Devops"
                logoAlt="Jenkins Logo"
                detail="~ One Year experience creating multibranch pipelines for deploying applications with Jenkins/Terraform/AWS. 
                Set up automated tests with coverage through sonar qube quaility gates. Created pipelines various applications including but not 
                limited to ecs tasks, lambdas, (ec2/ecs) microservices (Apache/Flask, Dropwizard), static frontends to cloudfront s3 origin 
                and some experence with Kubernetes for non production applications (POCS)"
              />
            </section>
          </NavItem>
          <NavItem name="Experience" :selected="false">
            <MyInfo name="Matt Watson" title="Full Stack Developer" />
          </NavItem>
          <NavItem name="Code" :selected="false">
            <MyInfo name="Matt Watson" title="Full Stack Developer" />
          </NavItem>
        </Nav>
      </div>
    </div>
  </div>
</template>

<script>
import MyInfo from "@/components/MyInfo.vue";
import Nav from "@/components/Nav.vue";
import NavItem from "@/components/NavItem.vue";
import Skill from "@/components/Skill.vue";
import Education from "@/components/Education.vue";
import Java from "@/assets/java-logo.png";
import Python from "@/assets/Python-logo.png";
import Devops from "@/assets/Devops.png";
export default {
  name: "app",
  components: {
    MyInfo,
    Nav,
    NavItem,
    Skill,
    Education
  },
  data: function() {
    return {
      Java: Java,
      Python: Python,
      Devops: Devops
    };
  }
};
</script>

<style></style>
