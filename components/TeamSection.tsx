import type { ReactNode } from 'react';
import { teamMembers } from '../constants';
import type { TeamMember } from '../types';

type SocialIconProps = {
  href: string;
  children: ReactNode;
};

const SocialIcon = ({ href, children }: SocialIconProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors">
    {children}
  </a>
);

type TeamMemberCardProps = {
  member: TeamMember;
};

const TeamMemberCard = ({ member }: TeamMemberCardProps) => (
  <div className="text-center flex flex-col items-center">
    <img
      src={member.imageUrl}
      alt={member.name}
      className="w-40 h-40 rounded-full object-cover mb-4 shadow-lg"
    />
    <h3 className="text-2xl font-bold">{member.name}</h3>
    <p className="text-amber-800 mb-4">{member.role}</p>
    <div className="flex space-x-4 mb-4">
      <SocialIcon href="#">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
      </SocialIcon>
      <SocialIcon href="#">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
      </SocialIcon>
      <SocialIcon href="#">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM8.22 16.711a.75.75 0 01-.22-1.033 8.51 8.51 0 015.006-4.223.75.75 0 01.996.342 6.989 6.989 0 00-3.935 4.606.75.75 0 01-.847.308zm-1.4-3.413a.75.75 0 01-.15-1.053 8.48 8.48 0 018.9-1.95.75.75 0 01-.397 1.458 6.983 6.983 0 00-7.394 1.47.75.75 0 01-.959.075zm7.33-4.14a.75.75 0 01-.52-1.236 8.512 8.512 0 013.91-2.45.75.75 0 11.5 1.413 7.012 7.012 0 00-3.232 2.131.75.75 0 01-.658.142z" clipRule="evenodd"/></svg>
      </SocialIcon>
    </div>
    {member.learnMoreUrl && (
      <a href={member.learnMoreUrl} className="mt-4 px-8 py-2 border border-gray-400 text-gray-700 rounded-md hover:bg-gray-100 transition-colors duration-300">
        Learn More
      </a>
    )}
  </div>
);

const TeamSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-amber-800 font-semibold mb-2">Unleash Your Inner Warrior</p>
        <h2 className="text-5xl font-bold mb-6">Our Team</h2>
        <p className="max-w-3xl mx-auto text-gray-600 mb-16">
          For over 30 years, our family-owned dojo, established by Mario Sequeira in 1992, has been a place where individuals and families grow together through the practice of traditional Goju-Ryu Karate. Now in our new, state-of-the-art facility, we offer a welcoming and supportive environment with top-quality equipment and expert instruction. Join our community and discover the strength and discipline of Karate-Do.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;