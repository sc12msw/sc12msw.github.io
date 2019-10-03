<template>
  <div id="app" class="antialiased">
    <div class="flex bg-gray-300 min-h-screen md:py-8">
      <div class="max-w-5xl mx-auto bg-white relative flex-1">
        <Nav>
          <NavItem name="Info" :selected="true">
            <MyInfo name="Matt Watson" title="Full Stack Developer" />
          </NavItem>
          <NavItem name="Education" :selected="false">
            <MyInfo name="Matt Watson" title="Full Stack Developer" />
          </NavItem>
          <NavItem name="Skills" :selected="false">
            <Skill
              title="Java"
              logoUrl="../assets/java-logo.png"
              logoAlt="Java Logo"
              desciption="Two years using java to create microservices with Jersey (and other various frameworks)"
            />
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

export default {
  name: "app",
  components: {
    MyInfo,
    Nav,
    NavItem,
    Skill
  }
};
</script>

<style></style>
