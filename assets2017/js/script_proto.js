// jQuery & Bootstrap should have already loaded

jQuery(document).ready(function() {
console.log( "Document is ready" );

// get session variable
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
console.log('A getUrlVars function is available to use.');
});

// start of to17_footer_js -->

/* ======================================
* Current Year
==================================== */
jQuery(document).ready(function(){
	var date = new Date().getFullYear();
	jQuery('.currYear').text(date);
});
function hideModal(){
    $("#dynamicFooterModal").modal('toggle');
}
jQuery(document).on('click', '.modal-header .close', function(){
    hideModal();
});
jQuery(document).on('click', '.modal-footer .footer-btn-close', function(){
    hideModal();
});
/* ======================================
* Convio Admin Editor Open
==================================== */
jQuery(document).ready(function(){
	var pageBuilder = getUrlVars()['pagebuilder'];
	if (pageBuilder == 'configure_layout'){
		jQuery('iframe#menuFrame').css({ 'position' : 'absolute', 'top' : '0' });
		jQuery('body').addClass('admin-editor-open');	
	}
});

// end of to17_footer_js -->


// START to17_survey_css_js

// 2017 RTCC Toronto MyProfile - SURVEY_ID = 81681


jQuery(document).ready(function(){
    var surveyID = getUrlVars()['SURVEY_ID']; // uses previously defined function to query the URL for 'SURVEY_ID' string
    var surveyTitle = jQuery('#content > form > div:nth-child(1) > h3').text();
    if ( surveyID == 81681 || surveyTitle == '2017 RTCC Toronto MyProfile' ){
        jQuery('.site-content').removeClass('container-fluid');
        /* 2017 RTCC Toronto MyProfile | ID = 81681 */
        jQuery('#content').addClass('container-fluid');
        jQuery('#content > form').wrap('<div class="my-rider-profile row"></div>');
        jQuery('.my-rider-profile > form').addClass('my-rider-profile-form container');

        jQuery('.my-rider-profile > form > .appArea:nth-child(1)').wrap('<div class="my-rider-profile-title-row row text-center blue-bg"></div>');
        jQuery('.my-rider-profile-title-row > .appArea').addClass('col-xs-12');
        jQuery('.my-rider-profile-title-row .ObjTitle').addClass('white-clr font-size-30');
        /* Change Title */
        jQuery('.my-rider-profile-title-row .ObjTitle').text('My Rider Profile');

        /* ====== If Logged In ====== */
        [[?xxnullxx::x[[S1:user_name]]x:: 
        jQuery('.my-rider-profile-form').append('<div class="my-rider-profile-not-logged-in-row row margin-top-minus-30"><div class="col-xs-12 blue-bg"><h3 class="text-center white-clr">Not Logged In</h3></div><div class="col-xs-12 white-bg"><p class="text-center">You Must Log In, In order to customize your profile information.</p><a href="PageServer?pagename=to17_login" title="Login" class="login-btn"><i class="fa fa-key"></i> Login</a></div></div>');
        /* Remove Form Buttons */
        jQuery('form.my-rider-profile-form > div:nth-child(5) > p').hide().empty();

        /* ====== Else If Not Logged In ====== */      
        ::

        jQuery('.my-rider-profile-title-row > .appArea').append('<p class="white-bg padding-10"><i class="fa fa-asterisk"></i> Indicates Required</p>');

        jQuery('.my-rider-profile > form table').hide();

        /* Personal Info Row */
        jQuery('.my-rider-profile-form').append('<div class="my-rider-profile-personal-info-row row margin-top-minus-30"><div class="col-xs-12 blue-bg"><h3 class="text-center white-clr">Personal Information</h3></div><div class="col-xs-12 col-sm-4 full-name-col"><p class="text-center margin-top-10"><i class="fa fa-asterisk"></i> Full Name</p></div><div class="col-xs-12 col-sm-4 dob-col"><p class="text-center margin-top-10"><i class="fa fa-asterisk"></i> Date of Birth</p></div><div class="col-xs-12 col-sm-4 gender-col"><p class="text-center margin-top-10"><i class="fa fa-asterisk"></i> Gender</p></div>');
        
        /* Full Name */
        var firstName = jQuery('input#cons_first_name');
        var lastName = jQuery('input#cons_last_name');

        /* Date Of Birth */
        var dobMonth = jQuery('select#cons_birth_date_MONTH');
        var dobDay = jQuery('select#cons_birth_date_DAY');
        var dobYear = jQuery('select#cons_birth_date_YEAR');

        /* Gender */
        var gender = jQuery('select#cons_gender');

        /* Full Name */
        jQuery('.my-rider-profile .full-name-col').append(firstName).append(lastName);
        jQuery('input#cons_first_name').attr('placeholder', 'First Name').prop('required', 'true');
        jQuery('input#cons_last_name').attr('placeholder', 'Last Name').prop('required', 'true');

        /* Date Of Birth */
        jQuery('.my-rider-profile .dob-col').append(dobMonth).append(dobDay).append(dobYear);
        jQuery('select#cons_birth_date_MONTH, select#cons_birth_date_DAY, select#cons_birth_date_YEAR').prop('required', 'true');

        /* Gender */
        jQuery('.my-rider-profile .gender-col').append(gender);
        jQuery('select#cons_gender').prop('required', 'true');
        /* jQuery('.my-rider-profile .gender-col select#cons_gender > option:nth-child(1)').prop('selected', true).prop('disabled', true).text('Please select response'); */

        /* Contact Info */
        jQuery('.my-rider-profile-form').append('<div class="my-rider-profile-contact-info-row row"><div class="col-xs-12 blue-bg"><h3 class="text-center white-clr">Contact Information</h3></div><div class="contact-info-first-col col-xs-12 col-sm-6"></div><div class="contact-info-second-col col-xs-12 col-sm-6"></div></div>');

        /* Contact Info First Col */
        var street1 = jQuery('input#cons_street1');
        var street2 = jQuery('input#cons_street2');
        var city = jQuery('input#cons_city');
        var state = jQuery('select#cons_state');

        /* Contact Info Second Col */
        var zipCode = jQuery('input#cons_zip_code');
        var country = jQuery('select#cons_country');
        var email = jQuery('input#cons_email');
        var phoneNumber = jQuery('input#cons_phone');

        /* Contact Info First Col */
        jQuery('.my-rider-profile .contact-info-first-col').append('<label class="text-left" for="cons_street1"><i class="fa fa-asterisk"></i> Street 1</label>').append(street1).append('<label class="text-left" for="cons_street2">Street 2</label>').append(street2).append('<label class="text-left" for="cons_city"><i class="fa fa-asterisk"></i> City</label>').append(city).append('<label class="text-left" for="cons_state"><i class="fa fa-asterisk"></i> Province/State</label>').append(state);

        jQuery('input#cons_street1, input#cons_city, select#cons_state').prop('required', 'true');

        /* Contact Info Second Col */
        jQuery('.my-rider-profile .contact-info-second-col').append('<label class="text-left" for="cons_zip_code"><i class="fa fa-asterisk"></i> Postal/Zip Code</label>').append(zipCode).append('<label class="text-left" for="cons_country"><i class="fa fa-asterisk"></i> Country</label>').append(country).append('<label class="text-left" for="cons_email"><i class="fa fa-asterisk"></i> Email</label>').append(email).append('<label class="text-left" for="cons_phone"><i class="fa fa-asterisk"></i> Phone Number</label>').append(phoneNumber);

        jQuery('input#cons_zip_code, select#cons_country, input#cons_email, input#cons_phone').prop('required', 'true');

        /* Additional Info */
        jQuery('.my-rider-profile-form').append('<div class="my-rider-profile-additional-info-row row"><div class="col-xs-12 blue-bg"><h3 class="text-center white-clr">Additional Information</h3></div><div class="additional-info-questions-col col-xs-12 col-sm-offset-2 col-sm-8"></div></div>');

        /* Additional Info Usable Variables */
        var businessPhone = jQuery('input#1900_81681_2_85338');
        var cellPhone = jQuery('input#1900_81681_3_85339');
        var howDidYouHearAboutThe2017TorontoRideToConquerCancer = jQuery('select#1900_81681_4_85340');
        var ifYouWereReferredByARiderPleaseEnterTheRider = jQuery('input#1900_81681_5_85341');
        var areYouAnEmployeeOfThePrincessMargaretCancerCentreOrFoundation = jQuery('select#1900_81681_6_85342');
        var selectCancerFund = jQuery('select#1900_81681_7_85343');
        var bikeJerseySize = jQuery('select#1900_81681_8_85344');
        var vegetarianMeal = jQuery('select#1900_81681_9_85345');
        var areYouACancerSurvivor = jQuery('select#1900_81681_10_85346');
        var receiveAdditionalPrincessMargaretInfo = jQuery('select#1900_81681_11_85347');
        var isThisACorporateTeam = jQuery('select#1900_81681_12_85348');
        var whatIsYourCorporateTeamCategory = jQuery('select#1900_81681_13_85349');
        var yourCourseRoute = jQuery('select#1900_81681_14_85350');
        /* Waiver Accepted */
        var waiverAccepted = jQuery('select#1900_81681_16_85352');
        /* ==================================================== */

        jQuery('.additional-info-questions-col').append('<label class="text-left" for="1900_81681_2_85338">Business Phone</label>').append(businessPhone).append('<label class="text-center" for="1900_81681_3_85339">Cell Phone</label>').append(cellPhone).append('<label class="text-center" for="1900_81681_4_85340"><i class="fa fa-asterisk"></i> How did you hear about the 2017 Toronto Ride to Conquer Cancer?</label>').append(howDidYouHearAboutThe2017TorontoRideToConquerCancer)
        .append('<label class="text-center" for="1900_81681_5_85341">If you were referred by a Rider, please enter the Rider\'s First &amp; Last Name or Participant Number</label>').append(ifYouWereReferredByARiderPleaseEnterTheRider)
        .append('<label class="text-center" for="1900_81681_6_85342">Are you an employee of the Princess Margaret Cancer Centre or Foundation?</label>').append(areYouAnEmployeeOfThePrincessMargaretCancerCentreOrFoundation)
        .append('<label class="text-left" for="1900_81681_7_85343"><i class="fa fa-asterisk"></i> Please select the Cancer Fund to which you would like your Fundraising Dollars to be allocated:</br>(if no selection is made, your fundraising dollars will be allocated to the Discovery Research Fund)</label>').append(selectCancerFund)
        .append('<label class="text-left" for="1900_81681_8_85344"><i class="fa fa-asterisk"></i> Bike Jersey Size (NOTE: jerseys are designed to be tight fitting. If you prefer a loose fit, choose 1-2 sizes larger)</label>').append(bikeJerseySize)
        .append('<label class="text-left" for="1900_81681_9_85345">Do you require vegetarian meals?</label>').append(vegetarianMeal)
        .append('<label class="text-left" for="1900_81681_10_85346">Would you like to self identify as a cancer survivor?</label>').append(areYouACancerSurvivor).append('<label class="text-left" for="1900_81681_11_85347">Would you like to receive additional information about the Princess Margaret Cancer Centre?</label>').append(receiveAdditionalPrincessMargaretInfo).append('<label class="text-left" for="1900_81681_12_85348">Is this a corporate team?</label>').append(isThisACorporateTeam).append('<label class="text-left corporate-industry-team-cat" for="1900_81681_13_85349">Corporate Industry Team Category?</label>').append(whatIsYourCorporateTeamCategory).append('<label class="text-left" for="1900_81681_14_85350">Please select your course route</label>').append(yourCourseRoute).append(waiverAccepted);

        /* Additional Information Placeholders */
        jQuery('input#1900_81681_2_85338').attr('placeholder', '877-699-2453');
        jQuery('input#1900_81681_3_85339').attr('placeholder', '877-699-2453');     

        /* Are you an employee of the Princess Margaret Cancer Centre or Foundation? */
        jQuery('select#1900_81681_6_85342 > option:nth-child(2)').text('Yes');
        jQuery('select#1900_81681_6_85342 > option:nth-child(3)').text('No');

        /* Do you require Vegetarian Meals? */
        jQuery('select#1900_81681_9_85345 > option:nth-child(2)').text('Yes');
        jQuery('select#1900_81681_9_85345 > option:nth-child(3)').text('No');

        /* Are you a cancer survivor? */
        jQuery('select#1900_81681_10_85346 > option:nth-child(2)').text('Yes');
        jQuery('select#1900_81681_10_85346 > option:nth-child(3)').text('No');

        /* Would you like to receive additional information about the Princess Margaret Centre? */
        jQuery('select#1900_81681_11_85347 > option:nth-child(2)').text('Yes');
        jQuery('select#1900_81681_11_85347 > option:nth-child(3)').text('No');

        /* Is this a corporate team? */
        jQuery('select#1900_81681_12_85348 > option:nth-child(2)').text('Yes');
        jQuery('select#1900_81681_12_85348 > option:nth-child(3)').text('No');

        jQuery('.corporate-industry-team-cat, select#1900_81681_13_85349').hide();
        /* function determines if a certain select input has the value yes */
        function is_This_A_Corporate_Team(){
            if ( jQuery('select#1900_81681_12_85348').val() == 'True'){
                jQuery('.corporate-industry-team-cat, select#1900_81681_13_85349').show(500);
            } else {
                jQuery('.corporate-industry-team-cat, select#1900_81681_13_85349').hide(500);
            }
        }
        /* on load */
        is_This_A_Corporate_Team();
        /* When Is This A Corporate Team select input's value changes */
        jQuery('select#1900_81681_12_85348').change(function(){
            is_This_A_Corporate_Team();
        });

        /* Turn Waiver Select Field Into A Checkbox */
        jQuery('select#1900_81681_16_85352').hide().after('<div class="waiver-check-wrapper"><button type="button" class="view-terms-and-conditions-waiver">View Toronto 2017 Waiver</button><label for="tems-and-conditions-waiver">I agree with the terms and conditions.</label></div>');
        jQuery('.view-terms-and-conditions-waiver').click(function(){
            if (!jQuery('.my-rider-profile').hasClass('has-dynamic-modal')){
                jQuery('.my-rider-profile').append('<div id="myRiderProfileModal" class="modal fade" tabindex="-1" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header text-center blue-bg"><button type="button" class="close" data-dismiss="modal"><i class="fa fa-times"></i></button><h3 class="modal-title white-clr">Terms And Conditions Waiver</h3></div><div class="modal-body"><div class="waiver-text-loader-wrapper"><i class="fa fa-cog fa-spin fa-3x"></i></div><div class="load-waiver-text-here waiver-text-wrapper"></div></div><div class="modal-footer"><button class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>').addClass('has-dynamic-modal');               
                jQuery('#myRiderProfileModal .modal-body .load-waiver-text-here').load("http://to17.conquercancer.ca/site/PageServer?pagename=to17_waiver .waiver-text p", function(){
                    jQuery('.waiver-text-loader-wrapper').hide(500);
                });
            } else {
                jQuery('#myRiderProfileModal .modal-title').text('Terms And Conditions Waiver');
                jQuery('#myRiderProfileModal .modal-body').html('<div class="waiver-text-loader-wrapper"><i class="fa fa-cog fa-spin fa-3x"></i></div><div class="load-waiver-text-here waiver-text-wrapper"></div>');
                jQuery('#myRiderProfileModal .modal-body .load-waiver-text-here').load("http://to17.conquercancer.ca/site/PageServer?pagename=to17_waiver .waiver-text p", function(){
                    jQuery('.waiver-text-loader-wrapper').hide(1000);
                });
            }
            jQuery('#myRiderProfileModal').modal({show:true});
        });


        function() {
	        /* check waiver acceptance status on load */
	        if ( jQuery('select#1900_81681_16_85352').val() == 'True' ){
	            jQuery('label[for="tems-and-conditions-waiver"]').addClass('ylw-checked');
	        } else {
	            jQuery('label[for="tems-and-conditions-waiver"]').removeClass('ylw-checked');
	        }
    	}


        
        /* on body click */
        jQuery('label[for="tems-and-conditions-waiver"]').click(function(){
            if (jQuery(this).hasClass('ylw-checked')){
                jQuery('select#1900_81681_16_85352').val('False');
                jQuery(this).removeClass('ylw-checked');
            } else {
                jQuery('select#1900_81681_16_85352').val('True');
                jQuery(this).addClass('ylw-checked');
            }
        });

        /* Add require trues to Additional Information fields */
        jQuery('select#1900_81681_4_85340, select#1900_81681_7_85343, select#1900_81059_9_84187, select#1900_81681_8_85344').prop('required', 'true');

        /* Hidden Fields */
        var denySubmit = jQuery('input#denySubmit');
        var consInfoComponent = jQuery('input#cons_info_component');
        var marketVal = jQuery('input#1900_81059_15_84195');
        var surveyID = jQuery('input#SURVEY_ID');
        jQuery('.my-rider-profile-form').append(denySubmit).append(consInfoComponent).append(marketVal).append(surveyID);
        jQuery('input#denySubmit').hide();

        /* Reset And Submit Button */
        jQuery('.my-rider-profile-form').append('<div class="my-rider-profile-btns-row row"><div class="my-rider-profile-btns-col col-xs-12 col-sm-offset-2 col-sm-8"></div></div>');

        /* Append Reset And Submit Button */
        jQuery('.my-rider-profile-btns-col').append('<button type="submit" name="ACTION_SUBMIT_SURVEY_RESPONSE" id="ACTION_SUBMIT_SURVEY_RESPONSE" value="Submit" class="blue-btn sm-float-right hvr-icon-bounce">Submit Answers</button>');
        jQuery('.my-rider-profile-btns-col').append('<button type="reset" name="reset" id="reset" value="Reset Answers" class="blue-btn sm-float-left hvr-icon-spin">Reset Answers</button>');

        jQuery('.my-rider-profile button#reset').click(function(){
            if (!jQuery('.my-rider-profile').hasClass('has-dynamic-modal')){
                jQuery('.my-rider-profile').append('<div id="myRiderProfileModal" class="modal fade" tabindex="-1" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header text-center blue-bg"><button type="button" class="close" data-dismiss="modal"><i class="fa fa-times"></i></button><h3 class="modal-title white-clr">My Profile Form Fields Reset.</h3></div><div class="modal-footer"><button class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>').addClass('has-dynamic-modal');               
            }
            jQuery('#myRiderProfileModal').modal({show:true});
            
        });

        /* Remove and Erase Original Reset and Submit Buttons */
        jQuery('.my-rider-profile form > div:nth-child(3)').addClass('view-current-results-appArea');
        jQuery('.my-rider-profile form > div:nth-child(5)').addClass('form-btns-appArea');
        jQuery('.view-current-results-appArea, .form-btns-appArea').hide().empty();

        /* Error Handling */
        jQuery('.my-rider-profile-title-row .ErrorMessage').prepend('<i class="fa fa-exclamation-triangle"></i> ');

        /* Toronto Specific JS */
        jQuery('select#cons_state').val('ON');

        ]]
        /* ====== End of If Else Logged In ====== */

        jQuery('.my-rider-profile > form table').empty();
    }
});


// strike thru price, add discount code
jQuery(document).ready(function(){
  var participantReferralID = getUrlVars()['s_subsrc'];

  if ( participantReferralID ){
    jQuery('#participation_options_page .section-sub-title-col>p').html('<h4>This participant: '+participantReferralID+' gave you $50.00 off registration.</h4><h5>Interested in joining or starting a team? Register below and then call the local team at 877-699-2453</h5>');
    jQuery('#participation_options_page label[for="fr_part_radio_1792"] .part-type-fee-text').html('<strike style="color: #E0373B;">$75.00</strike>').after('<span class="part-type-fee-text">&nbsp;$25.00</span>');
    jQuery('#participation_options_page label[for="fr_part_radio_1793"]').parent().hide();
    jQuery('#participation_options_page label[for="fr_part_radio_1794"]').parent().hide();
    jQuery('#participation_options_page .part-type-rider-col').removeClass('col-sm-4');
    jQuery('#participation_options_page input#discount_code').val('TO17PARTREFERRAL');
    jQuery('#participation_options_page .discount-code-col').hide();
  }
});