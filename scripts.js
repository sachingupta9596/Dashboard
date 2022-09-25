// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}

// ---------- CHARTS ----------

// AREA CHART
var areaChartOptions = {
  series: [
    {
      name: "Purchase Orders",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Sales Orders",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    height: 200,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  colors: ["#4f35a1", "#246dec"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: "Purchase Orders",
      },
    },
    {
      opposite: true,
      title: {
        text: "Sales Orders",
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

var areaChart = new ApexCharts(
  document.querySelector("#area-chart"),
  areaChartOptions
);
areaChart.render();

document.getElementById("submitForm").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  let table = document.getElementById("tabledata");

  //console.log(companyname, contact, company);
  let tr = document.createElement("tr");
  for (let i = 0; i <= 3; i++) {
    if (i < 3) {
      let td = document.createElement("td");
      td.innerText = e.target[0].value;
      tr.append(td);
    } else {
      let td = document.createElement("td");
      let span = document.createElement("span");
      span.innerHTML = "delete";
      span.classList.add("material-icons-outlined");
      span.classList.add("delete");
      td.append(span);
      tr.append(td);
    }
  }
  table.append(tr);
});

let alldeletebutton = document.getElementsByClassName("delete");

console.log(alldeletebutton);
for (let i = 0; i < alldeletebutton.length; i++) {
  alldeletebutton[i].addEventListener("click", deleterow);
}

function deleterow(e) {
  console.log(e);
  e.target.parentElement.parentElement.classList.add("hide");
}
