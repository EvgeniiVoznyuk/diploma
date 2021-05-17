<template>
  <div class="home">
    <div id="wrapper">
      <!-- Sidebar -->
      <ul
        class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <!-- Sidebar - Brand -->
        <a
          class="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div class="sidebar-brand-icon rotate-n-15">
            <i class="fas fa-laugh-wink"></i>
          </div>
          <div class="sidebar-brand-text mx-3">Cabinet</div>
        </a>

        <!-- Divider -->
        <hr class="sidebar-divider my-0" />

        <!-- Nav Item - Dashboard -->
        <li class="nav-item active">
          <a class="nav-link" href="index.html">
            <i class="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></a
          >
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider" />

        <!-- Heading -->
        <div class="sidebar-heading">Privilege</div>

        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
          <a
            class="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i class="fas fa-fw fa-cog"></i>
            <span>admin panel</span>
          </a>
        </li>
      </ul>
      <!-- End of Sidebar -->

      <!-- Content Wrapper -->
      <div id="content-wrapper" class="d-flex flex-column">
        <!-- Main Content -->
        <div id="content">
          <!-- Topbar -->
          <Navbar />
          <!-- End of Topbar -->
          <div class="container-fluid">
            <Login v-if="!isAuth" />
              <div v-else>
                <DataTable :value="participants" responsiveLayout="scroll">
                    <Column field="id" header="Id"></Column>
                    <Column field="firstName" header="FirstName"></Column>
                    <Column field="secondName" header="LastName"></Column>
                    <Column field="status" header="Status"></Column>
                </DataTable>
            </div>
          </div>
          <!-- /.container-fluid -->
        </div>
        <!-- End of Main Content -->

        <!-- Footer -->
        <footer class="sticky-footer bg-white">
          <div class="container my-auto">
            <div class="copyright text-center my-auto">
              <span>Copyright &copy; Your Website 2020</span>
            </div>
          </div>
        </footer>
        <!-- End of Footer -->
      </div>
      <!-- End of Content Wrapper -->
    </div>
  </div>
</template>

<script>
import Login from '@/components/Login.vue';
import Navbar from '@/components/Navbar.vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { computed, onMounted } from 'vue';
import  store from '../store';

export default {
  name: "Home",
  components: {
    Login,
    Navbar,
    DataTable,
    Column,
  },
  setup() {
    const isAuth = computed(() => store.state.isAuth)
    const participants = computed(() => store.state.participants)

    onMounted(async () => {
      await store.dispatch('getParticipants')
    })

    return {
      isAuth,
      participants
    }
  }
};
</script>
