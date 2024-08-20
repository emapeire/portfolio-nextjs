import { type SVGProps } from 'react'

export function ArFlagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='32'
      height='32'
      viewBox='0 0 32 32'
    >
      <path fill='#fff' d='M1 11H31V21H1z'></path>
      <path
        d='M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z'
        fill='#81acdc'
      ></path>
      <path
        d='M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z'
        transform='rotate(180 16 24)'
        fill='#81acdc'
      ></path>
      <path
        d='M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z'
        opacity='.15'
      ></path>
      <path
        d='M19.511,15.935c-.02-.007-.04-.007-.041-.007l-1.938-.073c.085-.024,.165-.053,.243-.082,.179-.066,.347-.129,.556-.11,.322,.029,.54-.092,.7-.18,.057-.031,.106-.059,.148-.072,.088-.029,.155-.006,.203,.01,.037,.013,.082,.028,.103-.015,.006-.013,.013-.038-.012-.072-.046-.062-.179-.117-.363-.09-.084,.012-.148,.042-.216,.074-.127,.059-.27,.126-.608,.099-.266-.021-.429,.032-.587,.084-.091,.03-.178,.058-.282,.071l1.814-.833s.02-.008,.036-.022c.026-.023,.035-.052,.023-.08-.007-.016-.019-.028-.034-.035-.034-.014-.075,.002-.079,.004l-1.819,.674c.069-.054,.132-.112,.193-.169,.14-.13,.271-.252,.471-.315,.308-.096,.464-.292,.578-.434,.041-.051,.076-.095,.109-.124,.07-.06,.141-.065,.192-.068,.039-.003,.087-.006,.09-.053,0-.014-.003-.04-.038-.062-.066-.04-.21-.04-.369,.056-.073,.044-.121,.096-.171,.151-.094,.103-.201,.22-.524,.324-.254,.082-.384,.194-.51,.302-.072,.062-.142,.122-.233,.174l1.357-1.463c.032-.032,.05-.082,.016-.117-.012-.012-.028-.019-.045-.019-.037,0-.068,.031-.071,.034l-1.422,1.319c.043-.077,.079-.154,.114-.23,.079-.173,.154-.337,.315-.471,.248-.207,.317-.447,.368-.622,.018-.063,.034-.117,.054-.156,.042-.083,.105-.114,.151-.136,.035-.017,.078-.038,.063-.083-.005-.013-.018-.036-.059-.042-.076-.012-.209,.044-.32,.193-.051,.069-.075,.135-.1,.205-.048,.131-.102,.28-.361,.5-.203,.173-.281,.326-.356,.474-.043,.085-.085,.167-.149,.25l.694-1.871c.017-.042,.015-.095-.03-.114-.016-.007-.033-.007-.049,0-.034,.014-.051,.055-.053,.058l-.809,1.763c.011-.087,.014-.172,.017-.256,.007-.19,.014-.37,.111-.556,.15-.286,.122-.534,.102-.716-.007-.065-.014-.12-.01-.165,.007-.092,.053-.145,.087-.184,.026-.029,.058-.065,.026-.101-.009-.01-.031-.026-.071-.017-.075,.018-.177,.12-.222,.301-.021,.083-.018,.153-.015,.227,.006,.14,.013,.298-.142,.6-.122,.237-.135,.409-.147,.574-.007,.095-.014,.187-.042,.288l-.075-1.994c0-.045-.022-.094-.072-.094h0c-.03,0-.054,.019-.065,.052-.007,.02-.007,.039-.007,.041l-.073,1.938c-.024-.085-.053-.165-.082-.243-.066-.179-.129-.347-.11-.556,.029-.322-.092-.54-.18-.7-.031-.057-.059-.106-.072-.148-.029-.088-.006-.155,.01-.203,.013-.037,.028-.082-.015-.103-.013-.006-.039-.013-.072,.012-.062,.046-.117,.179-.09,.363,.012,.084,.042,.148,.074,.216,.059,.127,.126,.27,.099,.608-.021,.266,.032,.429,.084,.587,.03,.091,.058,.178,.071,.282l-.833-1.814c-.017-.042-.056-.078-.102-.059-.028,.012-.043,.038-.04,.073,.001,.021,.009,.039,.009,.04l.674,1.818c-.054-.069-.112-.132-.169-.193-.13-.14-.252-.271-.315-.471-.096-.308-.292-.464-.434-.578-.051-.041-.095-.076-.124-.109-.06-.07-.065-.141-.068-.192-.003-.039-.006-.087-.053-.09-.014,0-.04,.003-.062,.038-.04,.066-.04,.21,.056,.369,.044,.073,.096,.121,.151,.171,.103,.094,.22,.201,.324,.524,.082,.254,.194,.384,.302,.51,.062,.072,.122,.142,.174,.234l-1.463-1.357c-.032-.032-.082-.05-.117-.015-.021,.021-.025,.052-.009,.083,.009,.019,.023,.033,.024,.033l1.319,1.422c-.077-.043-.154-.079-.23-.114-.173-.079-.337-.154-.471-.315-.207-.248-.447-.317-.623-.368-.062-.018-.116-.034-.156-.054-.083-.042-.114-.105-.136-.151-.017-.035-.038-.078-.083-.062-.013,.005-.036,.018-.042,.059-.012,.076,.044,.209,.193,.32,.069,.051,.135,.075,.205,.1,.131,.048,.28,.102,.5,.361,.173,.203,.326,.281,.474,.356,.085,.043,.167,.085,.25,.149l-1.871-.694c-.042-.017-.095-.015-.114,.03-.007,.016-.007,.033,0,.049,.014,.034,.055,.051,.058,.053l1.763,.809c-.087-.011-.172-.014-.256-.017-.19-.007-.37-.014-.556-.111-.286-.15-.535-.122-.716-.101-.065,.007-.12,.014-.165,.01-.092-.007-.145-.054-.184-.087-.029-.026-.065-.057-.101-.026-.01,.009-.026,.031-.017,.071,.018,.075,.12,.177,.301,.222,.083,.021,.153,.018,.227,.015,.14-.006,.298-.013,.6,.142,.237,.122,.409,.135,.574,.147,.095,.007,.187,.014,.288,.042l-1.994,.075h0c-.045,0-.093,.022-.094,.072,0,.017,.006,.033,.018,.045,.026,.026,.07,.027,.074,.027l1.938,.073c-.085,.023-.165,.053-.243,.082-.179,.066-.347,.129-.556,.11-.322-.029-.54,.092-.7,.18-.057,.031-.106,.059-.148,.072-.088,.029-.155,.006-.203-.01-.037-.013-.082-.028-.103,.015-.006,.013-.013,.038,.012,.072,.046,.062,.179,.117,.363,.09,.084-.012,.148-.042,.216-.074,.127-.059,.27-.126,.608-.099,.266,.021,.429-.032,.587-.084,.091-.03,.178-.058,.282-.071l-1.814,.833c-.042,.017-.078,.056-.059,.102,.011,.026,.034,.04,.065,.04,.002,0,.005,0,.007,0,.021-.001,.039-.009,.04-.009l1.818-.674c-.069,.054-.132,.112-.193,.169-.14,.13-.271,.252-.471,.315-.308,.096-.464,.292-.578,.434-.041,.051-.076,.095-.109,.124-.07,.06-.141,.065-.192,.068-.039,.002-.087,.006-.09,.053,0,.014,.003,.04,.038,.062,.066,.04,.21,.04,.369-.056,.073-.044,.121-.096,.171-.151,.094-.103,.201-.22,.524-.324,.254-.082,.384-.194,.51-.302,.072-.062,.142-.122,.233-.174l-1.357,1.463c-.032,.032-.05,.082-.015,.117,.012,.013,.028,.019,.045,.019,.012,0,.025-.003,.038-.01,.019-.009,.033-.023,.033-.024l1.422-1.319c-.043,.077-.079,.154-.114,.23-.079,.173-.154,.337-.315,.471-.248,.207-.317,.447-.368,.623-.018,.063-.034,.116-.054,.156-.042,.083-.105,.114-.151,.137-.035,.017-.078,.038-.062,.083,.005,.013,.018,.036,.059,.042,.076,.012,.209-.044,.32-.193,.051-.068,.075-.135,.1-.205,.048-.131,.102-.28,.361-.5,.203-.173,.281-.326,.356-.474,.043-.085,.085-.167,.149-.25l-.694,1.871c-.017,.042-.015,.095,.03,.114,.008,.003,.017,.005,.025,.005,.008,0,.016-.002,.024-.005,.034-.014,.051-.055,.053-.058l.809-1.763c-.011,.087-.014,.172-.017,.256-.007,.19-.014,.37-.111,.556-.15,.286-.122,.535-.101,.716,.007,.065,.014,.12,.01,.165-.007,.092-.054,.145-.087,.184-.026,.029-.057,.065-.026,.101,.009,.01,.031,.026,.071,.016,.075-.018,.177-.12,.222-.301,.021-.083,.018-.153,.015-.227-.006-.14-.013-.298,.142-.6,.122-.237,.135-.409,.147-.574,.007-.095,.014-.187,.042-.288l.075,1.994c0,.045,.022,.094,.072,.094,.03,0,.054-.019,.065-.052,.007-.02,.007-.039,.007-.041l.073-1.938c.024,.085,.053,.165,.082,.243,.066,.179,.129,.347,.11,.556-.029,.322,.092,.54,.18,.7,.031,.057,.059,.106,.072,.148,.029,.088,.006,.155-.01,.203-.013,.037-.028,.082,.015,.103,.006,.003,.014,.006,.025,.006,.013,0,.029-.004,.047-.017,.062-.046,.117-.179,.09-.363-.012-.084-.042-.148-.074-.216-.059-.127-.126-.27-.099-.608,.021-.266-.032-.429-.084-.587-.03-.091-.058-.178-.071-.282l.833,1.814s.008,.02,.022,.036c.023,.026,.052,.035,.08,.023,.016-.007,.028-.019,.035-.034,.014-.034-.002-.075-.004-.079l-.674-1.818c.054,.069,.112,.132,.169,.193,.13,.14,.252,.271,.315,.471,.096,.308,.292,.464,.434,.578,.051,.041,.095,.076,.124,.109,.06,.07,.065,.141,.068,.192,.002,.039,.006,.087,.053,.09,0,0,.002,0,.003,0,.014,0,.039-.006,.059-.038,.04-.066,.04-.21-.056-.369-.044-.073-.096-.121-.151-.171-.103-.094-.22-.201-.324-.524-.082-.254-.194-.384-.302-.51-.062-.072-.122-.142-.173-.233l1.463,1.357c.032,.032,.082,.05,.117,.015,.021-.021,.025-.051,.009-.083-.009-.019-.023-.033-.024-.033l-1.319-1.422c.077,.043,.154,.079,.23,.114,.173,.079,.337,.154,.471,.315,.207,.248,.447,.317,.622,.368,.063,.018,.116,.034,.156,.054,.083,.042,.114,.105,.137,.151,.015,.03,.032,.066,.065,.066,.006,0,.012-.001,.018-.003,.013-.005,.036-.018,.042-.059,.012-.076-.044-.209-.193-.32-.068-.051-.135-.075-.205-.1-.131-.048-.28-.102-.5-.361-.173-.203-.326-.281-.474-.356-.085-.043-.167-.085-.25-.149l1.871,.694c.042,.017,.095,.015,.114-.03,.007-.016,.007-.033,0-.049-.014-.034-.055-.051-.058-.053l-1.763-.809c.087,.011,.172,.014,.256,.017,.19,.007,.37,.014,.556,.111,.286,.15,.535,.122,.716,.102,.065-.007,.12-.014,.165-.01,.093,.007,.145,.053,.184,.087,.02,.018,.044,.039,.069,.039,.011,0,.021-.004,.032-.013,.01-.009,.026-.031,.016-.071-.018-.075-.12-.177-.301-.222-.083-.021-.153-.018-.227-.015-.14,.006-.298,.013-.6-.142-.237-.122-.409-.135-.574-.147-.095-.007-.187-.014-.288-.042l1.994-.075h0c.045,0,.093-.022,.093-.072,0-.03-.019-.054-.052-.065Z'
        fill='#edb840'
      ></path>
      <path
        d='M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z'
        fill='#fff'
        opacity='.2'
      ></path>
    </svg>
  )
}