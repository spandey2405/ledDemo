/**
 * Created by sid on 26/10/17.
 */
var token = Cookies.get('trill_dev_token');
if (!token) {
    window.location = "https://dev.trillbit.net/";
}

function checkpermissions(page, transfer) {
    var transfer_page = transfer || true;
    $.ajax({
        url: "https://api.trillbit.com/v1/sdk/login/?user_id=" + Cookies.get("sdk_secret"),
        type: 'GET',
        beforeSend: function(request) {
            request.setRequestHeader("Content-Type", "application/json");
        },
        success: function (resp) {
            console.log(resp);
            var flag = false;
            $.each(resp["payload"]["permissions"].split(','), function (key, value) {
                if (value === page) {
                    flag = true;
                }
            });

            console.log(flag);
            if (!flag) {
                if (transfer_page) {
                    window.location = "../index.html";
                }
            }
        }
    });
}