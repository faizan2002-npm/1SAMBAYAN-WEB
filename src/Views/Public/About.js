import {  Image, Container, Row, Col } from "react-bootstrap";

import img from "../../Constants/Admin/images";
import PublicLayout from "../../layouts/Public/PublicLayout";

const About = () => {
    return (
        <PublicLayout>
            <main id="main_content">
                <section className="home_banner">
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <Image src={img.Hand} className="d-block w-50" fluid />
                                <div className="carousel-caption">
                                    <Container>
                                        <Row className="justify-content-center">
                                            <Col lg={10} md={10} xs={12}>
                                                <h2>
                                                    "It is good governance
                                                    that will bring economic
                                                </h2>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-3">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={10} md={10} xs={12}>
                                <h1>
                                    “Walang isang kulay ang
                                    taong tapat sa pamumuno.”
                                </h1>
                                <Row className="justify-content-center my-5">
                                    <Col lg={6} md={6} xs={12}>
                                        <h5>
                                            How It All Began...
                                        </h5>
                                        <h3>
                                            WHAT IS
                                            1SAMBAYAN?
                                        </h3>
                                        <p>
                                            <b>
                                                1SAMBAYAN is a broad coalition of democratic forces
                                                representing the broad spectrum of legitimate
                                                political persuasions in the Philippines. It aims to
                                                usher in a competent, trustworthy administration
                                                in the May 2022 national elections by fielding a
                                                single slate of national candidates: president, vice
                                                president, and 12 senators.
                                            </b>
                                        </p>
                                        <p>
                                            The movement began in September 2020, when
                                            economic recession and unemployment due to
                                            the COVID-19 pandemic had set in, the number
                                            of infections kept rising, and the incumbent
                                            administration had shown itself incapable of a
                                            sensible, effective response to the crisis.
                                        </p>
                                        <p>
                                            Election lawyer Atty. Howard Calleja spoke with
                                            Jesuit priest Fr. Albert Alejo and La Salle Brother
                                            Armin Luistro about the urgency of preparing for the
                                            next election. That started a series of meetings that
                                            attracted patriotic personalities who wanted to find a
                                            way of restoring good governance in the country. They
                                            spoke with government officials, politicians, sectoral
                                            group leaders, and businessmen, who all agreed that
                                            Filipinos deserve much better leadership than the
                                            current one.
                                        </p>
                                        <p>
                                            But there wasn’t much that can be done under the
                                            regime. The group knew the battle would be in the
                                            May 9, 2022 national elections. Thus, their work was cut
                                            out for them: The democratic forces must fall behind a
                                            single slate of national candidates to ensure victory.
                                        </p>
                                        <p>
                                            The next step was to enlist the help of prominent,
                                            credible personalities with unquestioned integrity
                                            to lead the new group, particularly in its task of
                                            nominating prospective national candidates.
                                        </p>
                                        <p>
                                            First to come to mind was retired Supreme Court
                                            Justice Antonio Carpio, legal luminary and champion
                                            in the fight for the country’s sovereignty in the
                                            West Philippine Sea. He agreed to join the group in
                                            a heartbeat, and proposed to make it an inclusive
                                            coalition of democratic forces.
                                        </p>
                                        <p>
                                            “The unifying factor among all of these groups is that
                                            they believe that we should prevent an authoritarian
                                            government from taking hold in the Philippines in the
                                            next election,” says Carpio, who has been chosen by
                                            the coalition to be 1SAMBAYAN’s chairman.
                                        </p>
                                        <p>
                                            “We have to bring back good governance, respect for
                                            human rights, integrity, and honesty in government,”
                                            he adds.
                                        </p>
                                        <p>
                                            Through Carpio’s invitation, two other champions of
                                            democracy and justice joined 1SAMBAYAN: retired
                                            Ombudsman and Supreme Court Justice Conchita
                                            Carpio-Morales, and former Foreign Affairs Secretary,
                                            Ambassador Albert del Rosario.
                                        </p>
                                        <p>
                                            Justice Tony, Justice Chit, Amb. Albert, Bro. Armin, and
                                            Paring Bert are the convenors of 1SAMBAYAN, who will
                                        </p>
                                    </Col>
                                    <Col lg={6} md={6} xs={12}>
                                        <p>
                                            lead the selection process of the democratic forces’
                                            unified national slate for the 2022 elections.
                                        </p>
                                        <h4>
                                            “We have to be united because
                                            if the democratic forces will
                                            have two or more candidates for
                                            president, the anti-democratic
                                            forces could win. We believe that
                                            we have the majority, but if we are
                                            divided, we will be the minority in
                                            the election. That's why we have
                                            to be united – it's very important
                                            to have only one candidate so that
                                            we can win,” says Carpio.
                                        </h4>
                                        <p>
                                            The question is, how will 1SAMBAYAN find “the one”?
                                        </p>
                                        <p>
                                            “Syempre, malaking tanong ay sino nga ba 'yung
                                            alternatibo? Unang-una, kung sino 'yung mga
                                            hayagang tumututol sa patayan – isang sukatan 'yan.
                                            Kapag tameme ka, kapag wala kang paninindigan sa
                                            ginagawang talamak na pagpatay bilang estratehiya
                                            ng pagbabago sa lipunan, hindi ka kasali dito kasi
                                            kasali ka sa sumusuporta sa patayan,” says Paring Bert.
                                        </p>
                                        <p>
                                            (Of course, the big question is, who is the alternative,
                                            right? First of all, whoever outspokenly opposes the
                                            killings – that’s one measure. If you are mum, if you
                                            don’t make a stand on the brazen killings as a strategy
                                            to change society, you have no part in this because you
                                            are one of those who support the killings.)
                                        </p>
                                        <h4>
                                            “Kapag tahimik ka o kaya
                                            pumapalakpak ka, lalo na
                                            kung pumapalakpak ka pa
                                            sa ginagawang pagpatay sa
                                            pangalangan ng droga, may dugo
                                            sa iyong mga kamay,” he adds.
                                            (If you are silent or in applause,
                                            especially if you applaud the
                                            killings in the name of drugs,
                                            there is blood in your hands.)
                                        </h4>
                                        <p>
                                            <b>
                                                The foremost qualification to be 1SAMBAYAN’s
                                                candidate is a clear, upright stand against the
                                                atrocities of the current regime
                                            </b>
                                        </p>
                                        <p>
                                            Other factors the coalition will look into are
                                            prospective candidates’ track record, proposed
                                            platforms, and their winnability.
                                        </p>
                                        <p>
                                            1SAMBAYAN will also seek the consensus of patriotic,
                                            democracy-loving Filipinos in selecting candidates for
                                            2022. The goal is to find the right leaders every Filipino
                                            can rally behind and be proud of.
                                        </p>
                                        <p>
                                            The key to all this is unity. All the groups and political
                                            parties that are part of 1SAMBAYAN have agreed to
                                            abide by the selection process, and to support the
                                            coalition’s single slate of candidates, whoever they will
                                            be. -30-
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        </PublicLayout>
    )
}
export default About;
