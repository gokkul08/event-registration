import React from 'react';
import { Accordion } from 'semantic-ui-react';

const AccordionContent = (content) => (
    <div className="indent">
        {content}
    </div>
);

const AttendancePanels = [
    {
        title: 'Can I come if I tested positive for COVID-19 prior to the event?',
        content: { content: AccordionContent('You may not come if you tested positive for COVID-19 within 14 days of the event.'), key: 'attendance-1-content' },
        key: 'attendance-1'
    },
    {
        title: 'If I don’t test positive for COVID-19 but have had a known direct exposure from someone who has active COVID, can I still come?',
        content: { content: AccordionContent('No, you are not permitted to come if, in the 14 days prior to departure, you had close contact with anyone with a confirmed or suspected case of COVID-19. Per the CDC, close contact is defined as ~6 feet for a prolonged period of time (10-30 minutes, depending upon the distance).'), key: 'attendance-2-content' },
        key: 'attendance-2'
    },
    {
        title: ' I don’t feel comfortable going – what should I do?',
        content: { content: AccordionContent('We understand that while COVID-19 is still a part of our everyday lives each employee may have different personal considerations to take into account when deciding whether to attend.  While we’re implementing comprehensive safety measures, you should only attend if you feel absolutely comfortable doing so.'), key: 'attendance-3-content' },
        key: 'attendance-3'
    },
    {
        title: 'Will there be any remote access or livestreaming for those who can’t attend?',
        content: { content: AccordionContent('You may not come if you tested positive for COVID-19 within 14 days of the event.'), key: 'attendance-4-content' },
        key: 'attendance-4'
    },
    {
        title: 'Can I come if I tested positive for COVID-19 prior to the event?',
        content: { content: AccordionContent('While the entire event will not be livestreamed, we will make an effort to arrange for remote participation in select presentations.'), key: 'attendance-5-content' },
        key: 'attendance-5'
    },
];

const TravelPanels = [
    {
        title: 'Do I have to fly commercial? Will IAC provide private flight accommodations?',
        content: { content: AccordionContent('IAC is providing private flight accommodations for those in the NY, Denver and the SF area. We will be in touch regarding your specific travel arrangements. '), key: 'travel-1-content' },
        key: 'travel-1'
    },
    {
        title: 'What are the transportation accommodations and safety measures to and from the airport?',
        content: { content: AccordionContent('While we are still confirming ground transportation logistics, we intend to provide options that allow for ample space to socially distance and/or open windows to promote air circulation.  All drivers will also be required to wear masks.'), key: 'travel-2-content' },
        key: 'travel-2'
    },
    {
        title: ' What travel will occur during the event? Will we be leaving the property?',
        content: { content: AccordionContent('The entire event will be held at the hotel. '), key: 'travel-3-content' },
        key: 'travel-3'
    },
];

const LocationPanels = [
    {
        title: 'Is Arizona a hotspot?',
        content: { content: AccordionContent(<div>Arizona is currently experiencing a relatively low rate of new cases compared to most states.  We are constantly monitoring the situation and will make necessary adjustments as the events on the ground require. For the latest statistics, please visit <a href="https://covid.cdc.gov/covid-data-tracker/#cases" target="_blank" rel="noopener noreferrer">https://covid.cdc.gov/covid-data-tracker/#cases</a>.</div>), key: 'location-1-content' },
        key: 'location-1'
    },
    {
        title: 'What are the current CDC guidelines as it relates to travel to/from AZ?',
        content: { content: AccordionContent(<div>While the CDC is not restricting travel to Arizona, they do recommend taking safety precautions during domestic travel (see <a href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/travel-during-covid19.html" target="_blank" rel="noopener noreferrer">https://www.cdc.gov/coronavirus/2019-ncov/travelers/travel-during-covid19.html</a>).</div>), key: 'location-2-content' },
        key: 'location-2'
    },
    {
        title: ' Will we need to quarantine when we get home?',
        content: { content: AccordionContent('Post-travel quarantine requirements are set at the state level.  Currently New York does not require quarantine after travel to Arizona. Of course, this continues to evolve every day, so there is no certainty that the quarantine requirements of New York and other individual states will not change before (or during) our event.'), key: 'location-3-content' },
        key: 'location-3'
    },
];

const HotelPanels = [
    {
        title: 'What are the safety measures being taken by the hotel?',
        content: { content: AccordionContent(<div>An overview of safety measures currently being taken at the Ritz Carlton are available <a href="https://whattoexpect.marriott.com/tusrz" target="_blank" rel="noopener noreferrer">HERE</a>.</div>), key: 'hotel-1-content' },
        key: 'hotel-1'
    },
    {
        title: 'What are the occupancy limitations? Will the hotel be at full occupancy?',
        content: { content: AccordionContent('IAC is planning to rent out the entire hotel so there will not be any other guests on the premises during the APM.'), key: 'hotel-2-content' },
        key: 'hotel-2'
    },
    {
        title: 'Are spa services offered? Are the pools and other shared amenities open?',
        content: { content: AccordionContent(<div>Spa services at the hotel are currently closed, and pools are open. However we are arranging for some limited spa services—as well as access to the Fitness Center and In Room Dining—to be available to APM attendees. You can find more information by visiting the Ritz Carlton’s <a href="https://whattoexpect.marriott.com/tusrz" target="_blank" rel="noopener noreferrer">safety measures page</a> on the hotel website.</div>), key: 'hotel-3-content' },
        key: 'hotel-3'
    },
    {
        title: 'Will we be wearing masks and social distancing during dinners and cocktail hours?',
        content: { content: AccordionContent('Masks are not required while attendees are eating and drinking but you are encouraged to socially distance when your mask is off.'), key: 'hotel-4-content' },
        key: 'hotel-4'
    },
    {
        title: 'How will the seating work at dinner and meetings?',
        content: { content: AccordionContent('Meals and meetings will generally take place outdoors or in open and well ventilated spaces with ample room to physically distance.'), key: 'hotel-5-content' },
        key: 'hotel-5'
    },
    {
        title: 'What activities will be offered and what safety precautions are being taken around each of those?',
        content: { content: AccordionContent('While we are still planning the agenda, activities (with the exception of private spa services) will generally take place outside with ample space to physically distance.'), key: 'hotel-6-content' },
        key: 'hotel-6'
    },
    {
        title: 'Where will we be during presentations and meetings? Will we be socially distanced/wearing masks?',
        content: { content: AccordionContent('All presentations and meetings will be held outdoors or in open-to-the outdoors and well-ventilated spaces.  Masks are required any time you are unable to socially distance, but we will endeavor to provide ample space to allow for social distancing during any events.'), key: 'hotel-7-content' },
        key: 'hotel-7'
    },
];

const SafetyPanels = [
    {
        title: 'Can you provide a list of safety pre-cautions IAC will be taking onsite during the event?',
        content: { content: AccordionContent(
            <div>
                <p>
                    IAC is developing a comprehensive set of safety measures to reduce the risk of COVID-19 transmission. These safety measures will include:
                </p>
                <ul>
                    <li>Holding virtually the entire event outdoors</li>
                    <li>Making COVID-19 rapid testing available before, during, and after the event</li>
                    <li>Requiring masks any time social distancing is not possible (except when eating/drinking)</li>
                    <li>Requiring all attendees to notify us immediately in the event that they are not free from COVID-19 symptoms or exposure each morning</li>
                    <li>Making hand sanitizer and PPE available to all attendees</li>
                    <li>Prohibiting self-serve food stations</li>
                    <li>Ensuring the hotel implements enhanced safety measures</li>
                </ul>
        </div>
            ), key: 'safety-1-content' },
        key: 'safety-1'
    },
    {
        title: 'Will masks be provided? Should I bring my own mask?',
        content: { content: AccordionContent('Masks will be provided but you are of course welcome to use your own'), key: 'safety-2-content' },
        key: 'safety-2'
    },
    {
        title: 'Is there testing plan for the APM?',
        content: { content: AccordionContent('Yes, all attendees will be tested for COVID-19 prior to the event.'), key: 'safety-3-content' },
        key: 'safety-3'
    },
    {
        title: 'When and how will I access the test?',
        content: { content: AccordionContent('IAC is making arrangements to provide testing for attendees prior to departure and upon return. We will follow up with additional information regarding testing options and locations. We will also have optional testing available on-site each day.'), key: 'safety-4-content' },
        key: 'safety-4'
    },
    {
        title: 'I don’t live in an area where testing is widely available. Will this be an issue?',
        content: { content: AccordionContent('No, we will either make arrangements for a concierge test or have other testing options available in Arizona.'), key: 'safety-5-content' },
        key: 'safety-5'
    },
    {
        title: 'Will you be testing onsite at the event?',
        content: { content: AccordionContent('We will have optional testing available each day. '), key: 'safety-6-content' },
        key: 'safety-6'
    },
    {
        title: 'How many times are you asking attendees to test?',
        content: { content: AccordionContent('Each attendee will be asked to get tested at least once prior to the event. At home tests need to be submitted and arrive at the lab at least 72 hours in advance of your flight. We will also make VIP Concierge service (wherein a lab technician comes to your home) available for 24 hour turn around. Again, we will follow up with confirmed attendees individually about their testing options.'), key: 'safety-7-content' },
        key: 'safety-7'
    },
    {
        title: 'I’ve never taken the test before. What’s involved? What do I have to do?',
        content: { content: AccordionContent('Testing methods vary but they generally involve either a shallow nasal swab or saliva collection.'), key: 'safety-8-content' },
        key: 'safety-8'
    },
    {
        title: 'What if there is a positive test from an employee either during the APM or immediately following? What will you advise employees to do?',
        content: { content: AccordionContent('Employees who test positive in the 14 days prior to the APM will not be permitted to attend the event.  If an employee tests positive at the APM we will ask them to quarantine and return home.  Any other attendee who had close contact (~6 feet) for a prolonged period of time (10-30 minutes, depending upon the distance) with the positive employee will also be asked to quarantine and return home. We will inform all APM participants of possible exposure in the event an employee receives a positive test during or after the event, but we will not identify the employee.'), key: 'safety-9-content' },
        key: 'safety-9'
    },
    {
        title: 'I still have some questions before I feel comfortable making a decision to come. Who can I follow up with?',
        content: { content: AccordionContent(<div>Please reach out to Julie Chun at <a href="mailto: Julie.chun@iac.com">Julie.chun@iac.com</a></div>), key: 'safety-10-content' },
        key: 'safety-10'
    },
];

const Attendance = (
    <div className="indent">
        <Accordion.Accordion
            panels={AttendancePanels}
        />
    </div>
);

const Travel = (
    <div>
        <Accordion.Accordion
            panels={TravelPanels}
        />
    </div>
);

const Location = (
    <div>
        <Accordion.Accordion
            panels={LocationPanels}
        />
    </div>
);

const Hotel = (
    <div>
        <Accordion.Accordion
            panels={HotelPanels}
        />
    </div>
);

const Safety = (
    <div>
        <Accordion.Accordion
            panels={SafetyPanels}
        />
    </div>
);

const AccordionPanels = [
    { title: 'Attendance', content: { content: Attendance, key: 'attendance' } },
    { title: 'Travel', content: { content: Travel, key: 'travel' } },
    { title: 'Location/Hotel', content: { content: Location, key: 'sub-accordions' } },
    { title: 'Hotel Safety & Activities', content: { content: Hotel, key: 'sub-accordions' } },
    { title: 'Safety Precautions & Testing', content: { content: Safety, key: 'sub-accordions' } },
];

const FAQAccordian = () => (
    <div>
        <Accordion
            panels={AccordionPanels}
        />
    </div>
);

export default FAQAccordian;
