using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HotelServiceClient.Controllers
{
    public class SharedController : Controller
    {
        // GET: Shared
        public ActionResult ManageBookings()
        {
            return View();
        }

        public ActionResult ManageStaffs()
        {
            return View();
        }

        public ActionResult HouseKeeping()
        {
            return View();
        }

        public ActionResult ManageRooms()
        {
            return View();
        }

        public ActionResult ManagePayments()
        {
            return View();
        }

        public ActionResult Payment()
        {
            return View();
        }

        public ActionResult SucessPayment()
        {
            return View();
        }
    }
}