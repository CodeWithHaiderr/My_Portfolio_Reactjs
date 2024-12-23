/**
 * @copyright 2024 CodeWithHaiderr
 * @license Apache-2.0
 */

import PropTypes from "prop-types";

const SkillCard = ({ imgSrc, label, desc, classes }) => {
  return (
    <div className={`flex items-center gap-3 right-2 inset-2 ring-zinc-50/10 rounded-2xl p-3
        hover:bg-zinc-800 transition-colors group ${classes}`}>      
      <figure className="bg-zinc-700/10 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900
      transition-colors">
        <img src={imgSrc} alt={label} width={32} height={32} className="" />
      </figure>
      <div className="">
        <h3 className="">{label}</h3>
        <p className="bg-zinc-900 text-sm">{desc}</p>
      </div>
    </div>
  );
};

SkillCard.PropTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default SkillCard;
