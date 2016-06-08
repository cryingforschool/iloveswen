var ViewModel = function ()
{
    var self = this;

    
    self.error = ko.observable();
    self.bookings = ko.observableArray();
    self.rooms = ko.observableArray();
    self.payments = ko.observableArray();
    self.staffs = ko.observableArray();
    self.housekeepings = ko.observableArray();

    self.newBooking =
    {
        BookingId: ko.observable(),
        RoomId: ko.observable(),
        NoOfAdults: ko.observable(),
        NoOfChildren: ko.observable(),
        CheckInTime: ko.observable(),
        CheckOutTime: ko.observable(),
        CheckInDate: ko.observable(),
        CheckOutDate: ko.observable(),
        NoOfNights: ko.observable(),
        TotalPrice: ko.observable(),
        RoomQuantity: ko.observable(),
        AddRemarks: ko.observable(),
        SpecialRequests: ko.observable(),
    }


    self.newRoom =
        {
            RoomId: ko.observable(),
            RoomNo: ko.observable(),
            FloorNo: ko.observable(),
            RoomStatus: ko.observable(),
            RoomType: ko.observable(),
            RoomCapacity: ko.observable(),
            RoomDescription: ko.observable(),
            RoomPrice: ko.observable(),
        }


    self.newPayment =
        {
            PaymentId: ko.observable(),            
            FirstName: ko.observable(),
            LastName: ko.observable(),
            NameOnCard: ko.observable(),
            CardNo: ko.observable(),
            Cvc: ko.observable(),
            ExpiryMonth: ko.observable(),
            ExpiryYear: ko.observable(),
            CouponCode: ko.observable(),
            BillingAddress: ko.observable(),
            BillingCity: ko.observable(),
            BillingEmail: ko.observable(),
            BillingPostal: ko.observable(),
            BookingId: ko.observable()
        }


    self.newStaff =
    {
        StaffId: ko.observable(),
        StaffName: ko.observable(),
        MobileNo: ko.observable(),
        DateOfBirth: ko.observable(),
        AccountNo: ko.observable(),
        HomeAddress: ko.observable(),
        PostalCode: ko.observable(),
        DutyType: ko.observable(),
    }

    self.newHousekeeping =
        {
            HousekeepingId: ko.observable(),
            DutyDate: ko.observable(),
            DutyStartTime: ko.observable(),
            DutyEndTime: ko.observable(),
            NoOfHrs: ko.observable(),
            NoOfAssignedRooms: ko.observable(),
            StaffId: ko.observable()
        }

   
    var bookingsUri = 'http://localhost:53411/api/bookings/';
    var roomsUri = 'http://localhost:53411/api/rooms/';
    var paymentsUri = 'http://localhost:53411/api/payments/';
    var staffsUri = 'http://localhost:53411/api/staffs/';
    var housekeepingsUri = 'http://localhost:53411/api/Housekeepings/';


    function ajaxHelper(uri, method, data)
    {
        self.error(''); // Clear error message
        return $.ajax
            ({
            type: method,
            url: uri,
            dataType: 'json',
            contentType: 'application/json',
            data: data ? JSON.stringify(data) : null
            }).fail(function (jqXHR, textStatus, errorThrown)
        {
            self.error(errorThrown);
        });
    }


    //GET all Bookings
    function getAllBookings()
    {
        ajaxHelper(bookingsUri, 'GET').done(function (data)
        {
            self.bookings(data);
        });
    }

    //GET all Rooms
    function getAllRooms()
    {
        ajaxHelper(roomsUri, 'GET').done(function (data)
        {
            self.rooms(data);
        });
    }

    //GET all Payments 
    function getAllPayments()
    {
        ajaxHelper(paymentsUri, 'GET').done(function (data)
        {
            self.payments(data);
        });
    }

    //GET Payments
    function getPayments()
    {
        ajaxHelper(paymentsUri, 'GET').done(function (data)
        {
            self.payments(data);
        });
    }

    //GET all staffs
    function getAllStaffs() {
        ajaxHelper(staffsUri, 'GET').done(function (data) {
            self.staffs(data);
        });
    }

    //GET housekeepings
    function getHousekeepings() {
        ajaxHelper(housekeepingsUri, 'GET').done(function (data) {
            self.housekeepings(data);
        });
    }


    //GET all housekeepings
    function getAllHousekeepings() {
        ajaxHelper(housekeepingsUri, 'GET').done(function (data) {
            self.housekeepings(data);
        });
    }



    //POST Bookings
    self.addBooking = function (formElement) {
        var bookings =
            {
                RoomId: self.newBooking.BookingId(),
                NoOfAdults: self.newBooking.NoOfAdults(),
                NoOfChildren: self.newBooking.NoOfChildren(),
                CheckInTime: self.newBooking.CheckInTime(),
                CheckOutTime: self.newBooking.CheckOutTime(),
                CheckInDate: self.newBooking.CheckInDate(),
                CheckOutDate: self.newBooking.CheckOutDate(),
                NoOfNights: self.newBooking.NoOfNights(),
                TotalPrice: self.newBooking.TotalPrice(),
                RoomQuantity: self.newBooking.RoomQuantity(),
                AddRemarks: self.newBooking.AddRemarks(),
                SpecialRequests: self.newBooking.SpecialRequests(),
            };

        ajaxHelper(bookingsUri, 'POST', bookings).done(function (item) {
            self.bookings.push(item);
        });
    }

    //POST Rooms
    self.addRoom = function (formElement) {
        var rooms = {
            BookingId: self.newRoom.Booking.RoomId(),
            RoomNo: self.newRoom.RoomNo(),
            FloorNo: self.newRoom.FloorNo(),
            RoomStatus: self.newRoom.RoomStatus(),
            RoomType: self.newRoom.RoomType(),
            RoomCapacity: self.newRoom.RoomCapacity(),
            RoomDescription: self.newRoom.RoomDescription(),
            RoomPrice: self.newRoom.RoomPrice(),
        };

        ajaxHelper(roomsUri, 'POST', rooms).done(function (item) {
            self.rooms.push(item);
        });
    }

    //POST Payments
    self.addPayment = function (formElement)
    {
        var Payment =
            {
                FirstName: self.newPayment.FirstName(),
                LastName: self.newPayment.LastName(),
                NameOnCard: self.newPayment.NameOnCard(),
                CardNo: self.newPayment.CardNo(),
                Cvc: self.newPayment.Cvc(),
                ExpiryMonth: self.newPayment.ExpiryMonth(),
                ExpiryYear: self.newPayment.ExpiryYear(),
                CouponCode: self.newPayment.CouponCode(),
                BillingAddress: self.newPayment.BillingAddress(),
                BillingCity: self.newPayment.BillingCity(),
                BillingEmail: self.newPayment.BillingEmail(),
                BillingPostal: self.newPayment.BillingPostal(),
                BookingId: self.newPayment.BookingId()
            };
        ajaxHelper(paymentsUri, 'POST', Payment).done(function (item)
        {
            self.payments.push(item);
        });
    }


    //POST Staffs
    self.addStaff = function (formElement) {
        var Staff = {
            StaffId: self.newStaff.StaffId(),
            StaffName: self.newStaff.StaffName(),
            MobileNo: self.newStaff.MobileNo(),
            DateOfBirth: self.newStaff.DateOfBirth(),
            AccountNo: self.newStaff.AccountNo(),
            HomeAddress: self.newStaff.HomeAddress(),
            PostalCode: self.newStaff.PostalCode(),
            DutyType: self.newStaff.DutyType(),
        };

        ajaxHelper(staffsUri, 'POST', Staff).done(function (item) {
            self.staffs.push(item);
        });
    }


    //POST housekeeping
    self.addHousekeeping = function (formElement) {
        var Housekeeping =
            {
                HousekeepingId: self.newHousekeeping.HousekeepingId(),
                DutyDate: self.newHousekeeping.DutyDate(),
                DutyStartTime: self.newHousekeeping.DutyStartTime(),
                DutyEndTime: self.newHousekeeping.DutyEndTime(),
                NoOfHrs: self.newHousekeeping.NoOfHrs(),
                NoOfAssignedRooms: self.newHousekeeping.NoOfAssignedRooms(),
                StaffId: self.newHousekeeping.StaffId()
            };

        ajaxHelper(housekeepingsUri, 'POST', Housekeeping).done(function (item) {
            self.housekeepings.push(item);
        });
    }




    //DELETE Bookings
    self.deleteBooking = function (item) {
        console.log("BookingUri" + bookingsUri + item.BookingId);
        ajaxHelper(bookingsUri + item.BookingId, 'DELETE').done(function (data) {
            getAllBookings();
        });
    }

    //DELETE Rooms
    self.deleteRoom = function (item) {
        console.log("RoomUri" + roomsUri + item.RoomId);
        ajaxHelper(roomsUri + item.RoomId, 'DELETE').done(function (data) {
            getAllRooms();
        });
    }

    //DELETE Payments
    self.deletePayment = function (item)
    {
        console.log("PaymentUri" + paymentsUri + item.PaymentId);
        ajaxHelper(paymentsUri + item.PaymentId, 'DELETE').done(function (data)
        {
            getAllPayments();
        });
    }

    //DELETE staff
    self.deleteStaff = function (item) {
        console.log("staffsUri" + staffsUri + item.StaffId);
        ajaxHelper(staffsUri + item.StaffId, 'DELETE').done(function (data) {
            getAllStaffs();
        });
    }

    //DELETE housekeeping
    self.deleteHousekeeping = function (item) {
        console.log("HousekeepingsUri" + housekeepingsUri + item.HousekeepingId);
        ajaxHelper(housekeepingsUri + item.HousekeepingId, 'DELETE').done(function (data) {
            getAllHousekeepings();
        });
    }


    //GET Bookings for UPDATE
    self.populateBookingsForUpdate = function (item) {
        ajaxHelper(bookingsUri + item.BookingId, 'GET').done(function (data) {
            self.newBooking.BookingId(data.BookingId);
            self.newBooking.NoOfAdults(data.NoOfAdults);
            self.newBooking.NoOfChildren(data.NoOfChildren);
            self.newBooking.CheckInTime(data.CheckInTime);
            self.newBooking.CheckOutTime(data.CheckOutTime);
            self.newBooking.CheckInDate(data.CheckInDate);
            self.newBooking.CheckOutDate(data.CheckOutDate);
            self.newBooking.NoOfNights(data.NoOfNights);
            self.newBooking.TotalPrice(data.TotalPrice);
            self.newBooking.RoomQuantity(data.RoomQuantity);
            self.newBooking.AddRemarks(data.AddRemarks);
            self.newBooking.SpecialRequests(data.SpecialRequests);
        });
    }
    //UPDATE Bookings
    self.updateBooking = function (item) {
        var Booking = {
            BookingId: self.newBooking.BookingId(),
            NoOfAdults: self.newBooking.NoOfAdults(),
            NoOfChildren: self.newBooking.NoOfChildren(),
            CheckInTime: self.newBooking.CheckInTime(),
            CheckOutTime: self.newBooking.CheckOutTime(),
            CheckInDate: self.newBooking.CheckInDate(),
            CheckOutDate: self.newBooking.CheckOutDate(),
            NoOfNights: self.newBooking.NoOfNights(),
            TotalPrice: self.newBooking.TotalPrice(),
            RoomQuantity: self.newBooking.RoomQuantity(),
            AddRemarks: self.newBooking.AddRemarks(),
            SpecialRequests: self.newBooking.SpecialRequests(),
            RoomId: self.newBooking.BookingId()
        };

        ajaxHelper(bookingsUri + self.newBooking.BookingId(), 'PUT', Booking).done(function (item) {
            getAllBookings();
        });
    }

    //GET Rooms to UPDATE
    self.populateRoomsForUpdate = function (item) {
        ajaxHelper(roomsUri + item.RoomId, 'GET').done(function (data) {
            self.newRoom.RoomId(data.RoomId);
            self.newRoom.RoomNo(data.RoomNo);
            self.newRoom.FloorNo(data.FloorNo);
            self.newRoom.RoomStatus(data.RoomStatus);
            self.newRoom.RoomType(data.RoomType);
            self.newRoom.RoomCapacity(data.RoomCapacity);
            self.newRoom.RoomDescription(data.RoomDescription);
            self.newRoom.RoomPrice(data.RoomPrice);
        });
    }
    //UPDATE Rooms
    self.updateRoom = function (item) {
        var Room = {
            RoomId: self.newRoom.RoomId(),
            RoomNo: self.newRoom.RoomNo(),
            FloorNo: self.newRoom.FloorNo(),
            RoomStatus: self.newRoom.RoomStatus(),
            RoomType: self.newRoom.RoomType(),
            RoomCapacity: self.newRoom.RoomCapacity(),
            RoomDescription: self.newRoom.RoomDescription(),
            RoomPrice: self.newRoom.RoomPrice(),
        };

        ajaxHelper(roomsUri + self.newRoom.RoomId(), 'PUT', Room).done(function (item) {
            getAllRooms();
        });
    }



    //GET Payments to UPDATE
    self.populatePaymentsForUpdate = function (item)
    {
        ajaxHelper(paymentsUri + item.PaymentId, 'GET').done(function (data)
        {
            self.newPayment.PaymentId(data.PaymentId);
            self.newPayment.FirstName(data.FirstName);
            self.newPayment.LastName(data.LastName);
            self.newPayment.NameOnCard(data.NameOnCard);
            self.newPayment.CardNo(data.CardNo);
            self.newPayment.Cvc(data.Cvc);
            self.newPayment.ExpiryMonth(data.ExpiryMonth);
            self.newPayment.ExpiryYear(data.ExpiryYear);
            self.newPayment.CouponCode(data.CouponCode);
            self.newPayment.BillingAddress(data.BillingAddress);
            self.newPayment.BillingCity(data.BillingCity);
            self.newPayment.BillingEmail(data.BillingEmail);
            self.newPayment.BillingPostal(data.BillingPostal);
        });
    }

    //UPDATE Payments
    self.updatePayments = function ()
    {
        var Payment =
       {
           PaymentId: self.newPayment.PaymentId(),
           FirstName: self.newPayment.FirstName(),
           LastName: self.newPayment.LastName(),
           NameOnCard: self.newPayment.NameOnCard(),
           CardNo: self.newPayment.CardNo(),
           Cvc: self.newPayment.Cvc(),
           ExpiryMonth: self.newPayment.ExpiryMonth(),
           ExpiryYear: self.newPayment.ExpiryYear(),
           CouponCode: self.newPayment.CouponCode(),
           BillingAddress: self.newPayment.BillingAddress(),
           BillingCity: self.newPayment.BillingCity(),
           BillingEmail: self.newPayment.BillingEmail(),
           BillingPostal: self.newPayment.BillingPostal(),
           BookingId: self.newPayment.PaymentId()
       };

        ajaxHelper(paymentsUri + self.newPayment.PaymentId(), 'PUT', Payment).done(function (item) {
            getAllPayments();
        });
    }


        //GET staffs to UPDATE
    self.populateStaffsForUpdate = function (item)
    {
            ajaxHelper(staffsUri + item.StaffId, 'GET').done(function (data) {
                self.newStaff.StaffId(data.StaffId);
                self.newStaff.StaffName(data.StaffName);
                self.newStaff.MobileNo(data.MobileNo);
                self.newStaff.DateOfBirth(data.DateOfBirth);
                self.newStaff.AccountNo(data.AccountNo);
                self.newStaff.HomeAddress(data.HomeAddress);
                self.newStaff.PostalCode(data.PostalCode);
                self.newStaff.DutyType(data.DutyType);
            });
        }


        //UPDATE staffs
        self.updateStaff = function ()
        {
            var Staff = {
                StaffId: self.newStaff.StaffId(),
                StaffName: self.newStaff.StaffName(),
                MobileNo: self.newStaff.MobileNo(),
                DateOfBirth: self.newStaff.DateOfBirth(),
                AccountNo: self.newStaff.AccountNo(),
                HomeAddress: self.newStaff.HomeAddress(),
                PostalCode: self.newStaff.PostalCode(),
                DutyType: self.newStaff.DutyType()

            };

            ajaxHelper(staffsUri + self.newStaff.StaffId(), 'PUT', Staff).done(function (item)
            {
                getAllStaffs();
            });
        }


    //GET housekeepings to UPDATE
        self.populateHousekeepingsForUpdate = function (item)
        {
            ajaxHelper(housekeepingsUri + item.HousekeepingId, 'GET').done(function (data) {
                self.newHousekeeping.HousekeepingId(data.HousekeepingId);
                self.newHousekeeping.DutyDate(data.DutyDate);
                self.newHousekeeping.DutyStartTime(data.DutyStartTime);
                self.newHousekeeping.DutyEndTime(data.DutyEndTime);
                self.newHousekeeping.NoOfHrs(data.NoOfHrs);
                self.newHousekeeping.NoOfAssignedRooms(data.NoOfAssignedRooms);
                self.newHousekeeping.StaffId(data.StaffId);
            });
        }

    //UPDATE housekeepings
        self.updateHousekeeping = function ()
        {
            var Housekeeping =
                {
                    HousekeepingId: self.newHousekeeping.HousekeepingId(),
                    DutyDate: self.newHousekeeping.DutyDate(),
                    DutyStartTime: self.newHousekeeping.DutyStartTime(),
                    DutyEndTime: self.newHousekeeping.DutyEndTime(),
                    NoOfHrs: self.newHousekeeping.NoOfHrs(),
                    NoOfAssignedRooms: self.newHousekeeping.NoOfAssignedRooms(),
                    StaffId: self.newHousekeeping.StaffId()
                };

            ajaxHelper(housekeepingsUri + self.newHousekeeping.HousekeepingId(), 'PUT', Housekeeping).done(function (item)
            {
                getAllHousekeepings();
            });
        }

 

    //fetch all initial data
    getAllBookings();
    getAllRooms();
    getAllPayments();
    getPayments();
    getAllStaffs();
    getAllHousekeepings();
    getHousekeepings();

};

ko.applyBindings(new ViewModel());






