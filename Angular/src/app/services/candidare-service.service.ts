import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Admin } from '../common/admin';
import { Candidates } from '../common/candidates';
import { Voters } from '../common/voters';
import { Votes } from '../common/votes';

@Injectable({
  providedIn: 'root'
})
export class CandidareServiceService {

  

  CandidatesURL:string="http://localhost:8081/votingmanagementsystem/Candidates";
  VotersURL:string="http://localhost:8081/votingmanagementsystem/Voters";
  AdminURL:string="http://localhost:8081/votingmanagementsystem/Admin";
  VotesURL:string="http://localhost:8081/votingmanagementsystem/Votes";
  constructor( private httpClient: HttpClient) { }

  getAllCandidates(): Observable<Candidates[]>
  {
     return this.httpClient.get<GetCandidatesResponse>(this.CandidatesURL).
     pipe(map(response=>response._embedded.candidateses))
  }

  getAllVoters(): Observable<Voters[]>
  {
     return this.httpClient.get<GetVotersResponse>(this.VotersURL).
     pipe(map(response=>response._embedded.voterses))
  }

  getAllVotes(): Observable<Votes[]>
  {
     return this.httpClient.get<GetVotingResponse>(this.VotesURL).
     pipe(map(response=>response._embedded.voteses))
  }

  getVoteDetails(): Observable<Votes[]>
  {
    return this.httpClient.get<GetVotingResponse>(this.VotesURL).
    pipe(map(response=>response._embedded.voteses))
  }

  saveCandidates(candidatess:Candidates): Observable<Candidates>
  {
    const httpOptions=
    {
     headers:new HttpHeaders({
       'content-type':'application/json',
       'Authorization':'auth-token',
       'Access-Control-Allow-Origin':'*'
     })
    };
     return this.httpClient.post<Candidates>(this.CandidatesURL,candidatess,httpOptions);
  }
  saveVotes(votess:Votes): Observable<Votes>
  {
    const httpOptions=
    {
     headers:new HttpHeaders({
       'content-type':'application/json',
       'Authorization':'auth-token',
       'Access-Control-Allow-Origin':'*'
     })
    };
     return this.httpClient.post<Votes>(this.VotesURL,votess,httpOptions);
  }

 

getCandidateById(candidateId:number): Observable<Candidates>
{
const CandidatesURL=this.CandidatesURL+"/"+candidateId;
return this.httpClient.get<Candidates>(CandidatesURL);
}


updateCandidate(candidatess:Candidates):Observable<Candidates>
{
 const httpOptions=
 {
  headers:new HttpHeaders({
    'content-type':'application/json',
      'Authorization':'auth-token',
      'Access-Control-Allow-Origin':'*'
  })
 };
  return this.httpClient.put<Candidates>(this.CandidatesURL+`/${candidatess.candidate_id}`,candidatess,httpOptions);
}
deleteCandidate(candidateId:number):Observable<Candidates>
  {
   const httpOptions=
   {
    headers:new HttpHeaders({
      'content-type':'application/json',
      'Authorization':'auth-token',
      'Access-Control-Allow-Origin':'*'
    })
   };
    return this.httpClient.delete<Candidates>(this.CandidatesURL+`/${candidateId}`,httpOptions);
  }
  saveAdmin(admin:Admin):Observable<Admin>
  {
    const httpOptions=
    {
     headers:new HttpHeaders({
       'content-type':'application/json',
       'Authorization':'auth-token',
       'Access-Control-Allow-Origin':'*'
     })
    };
     return this.httpClient.post<Admin>(this.AdminURL,admin,httpOptions);
  }
  loginVoters(voterss:Voters) : Observable<object>
  {
    console.log(voterss);
    return this.httpClient.post(`${this.VotersURL}`,voterss);
  }
  // getloginVoters(voterss:Voters) : Observable<object>{
  //   return this.httpClient.get<GetVotersResponse>(this.VotersURL).
  //   pipe(map(response=>response._embedded.voterses))
  // }
  saveVoters(voterss:Voters):Observable<Voters>
  {
    // console.log(voterss);
    const httpOptions=
    {
     headers:new HttpHeaders({
       'content-type':'application/json',
       'Authorization':'auth-token',
       'Access-Control-Allow-Origin':'*'
     })
    };
     return this.httpClient.post<Voters>(this.VotersURL,voterss,httpOptions);
  }
}
interface GetCandidatesResponse
{
  _embedded:
  {
    candidateses: Candidates[]
  }
}
interface GetVotersResponse
{
  _embedded:
  {
    voterses: Voters[]
  }
}
interface GetVotingResponse
{
  _embedded:
  {
    voteses: Votes[]
  }
}





