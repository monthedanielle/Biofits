package com.thbproject.biofits.search.aktivitaet;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Predicate;
import javax.persistence.criteria.Root;

import org.springframework.data.jpa.domain.Specification;

import com.thbproject.biofits.model.Aktivitaet;
import com.thbproject.biofits.model.Aktivitaet_;
import com.thbproject.biofits.model.Benutzer_;
import com.thbproject.biofits.model.SportArt_;

public class AktivitaetSpecs implements Specification<Aktivitaet> {

    private AktivitaetCriteria criteria;

    public AktivitaetCriteria getCriteria() {
        return criteria;
    }

    public AktivitaetSpecs(AktivitaetCriteria criteria) {
        this.criteria = criteria;
    }

    public void setCriteria(AktivitaetCriteria criteria) {
        this.criteria = criteria;
    }

    @Override
    public Predicate toPredicate(Root<Aktivitaet> root, CriteriaQuery<?> query,
            CriteriaBuilder cb) {
        final List<Predicate> predicates = new ArrayList<>();

        if (criteria.getRunning() != null && criteria.getRunning()) {

            Date date = new Date();

            predicates.add(cb.and(
                    cb.greaterThanOrEqualTo(root.get(Aktivitaet_.startDatum), date),
                    cb.lessThanOrEqualTo(root.get(Aktivitaet_.endDatum), date)));
        }

        if (criteria.getDate() != null) {
            predicates.add(cb.and(
                    cb.greaterThanOrEqualTo(root.get(Aktivitaet_.startDatum), criteria.getDate()),
                    cb.lessThanOrEqualTo(root.get(Aktivitaet_.endDatum), criteria.getDate())));
        }

        if (criteria.getSportArtId() != null) {
            predicates.add(cb.equal(root.get(Aktivitaet_.sportArt).get(SportArt_.id),
                    criteria.getSportArtId()));
        }

        if (criteria.getBenutzerId() != null) {
            predicates.add(cb.equal(root.get(Aktivitaet_.benutzer).get(Benutzer_.id), criteria.getBenutzerId()));
        }

        query.distinct(true);
        return cb.and(predicates.toArray(new Predicate[predicates.size()]));

    }

}
